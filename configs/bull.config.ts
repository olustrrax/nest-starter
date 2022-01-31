import { Injectable } from '@nestjs/common';
import { BullModuleOptions, BullOptionsFactory } from '@nestjs/bull';

@Injectable()
export class BullConfigService implements BullOptionsFactory {
  createBullOptions(): BullModuleOptions {
    return {
      redis: {
        host: process.env.REDIS_URL,
        port: +process.env.REDIS_PORT || 6379,
      },
    };
  }
}
