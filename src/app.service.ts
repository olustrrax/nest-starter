import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class AppService {
  constructor(
    @InjectQueue('hello')
    private helloQueue: Queue,
  ) {}
  getHello() {
    this.helloQueue.add('welcome', 'hello', {
      // delay: 300000, // 5 mins delayed
      attempts: 3,
      removeOnComplete: true,
    });
  }
}
