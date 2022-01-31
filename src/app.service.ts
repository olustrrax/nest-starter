import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';

@Injectable()
export class AppService {
  constructor(
    @InjectQueue('managerA')
    private helloQueue: Queue,
    @InjectQueue('managerB')
    private writeQueue: Queue,
  ) {}
  getHello() {
    this.helloQueue.add('hello_welcome', 'hello welcome', {
      delay: 300000, // 5 mins delayed
      attempts: 3,
      removeOnComplete: true,
    });
  }

  write() {
    this.writeQueue.add('write', 'writing something...🖋', {
      attempts: 3,
      removeOnComplete: true,
    });
  }
}
