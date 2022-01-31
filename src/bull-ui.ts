import { createBullBoard } from '@bull-board/api';
import { ExpressAdapter } from '@bull-board/express';
import * as Queue from 'bull';
import { BullAdapter } from '@bull-board/api/bullAdapter';
import { NestApplication } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

const BullBoardUI = (app: NestApplication): void => {
  const configService = app.get(ConfigService);
  const redisOptions = {
    port: configService.get('redis.port'),
    host: configService.get('redis.host'),
  };
  const managerA = new Queue('managerA', { redis: redisOptions });
  const managerB = new Queue('managerB', { redis: redisOptions });

  const serverAdapter = new ExpressAdapter();
  createBullBoard({
    queues: [
      new BullAdapter(managerA, { readOnlyMode: false }),
      new BullAdapter(managerB, { readOnlyMode: false }),
    ],
    serverAdapter: serverAdapter,
  });

  serverAdapter.setBasePath('/queues/ui');
  app.use('/queues/ui', serverAdapter.getRouter());
};

export default BullBoardUI;
