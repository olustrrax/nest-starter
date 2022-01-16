import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { BullConfigService } from 'configs/bull.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloConsumer } from './processors/manager-a.processor';
import { WriteConsumer } from './processors/manager-b.processor';

@Module({
  imports: [
    BullModule.registerQueueAsync({
      useClass: BullConfigService,
      name: 'managerA',
    }),
    BullModule.registerQueueAsync({
      useClass: BullConfigService,
      name: 'managerB',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, HelloConsumer, WriteConsumer],
})
export class AppModule {}
