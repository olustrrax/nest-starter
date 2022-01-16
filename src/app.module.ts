import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { BullConfigService } from 'configs/bull.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloConsumer } from './processors/hello.processor';

@Module({
  imports: [
    BullModule.registerQueueAsync({
      useClass: BullConfigService,
      name: 'hello',
    }),
  ],
  controllers: [AppController],
  providers: [AppService, HelloConsumer],
})
export class AppModule {}
