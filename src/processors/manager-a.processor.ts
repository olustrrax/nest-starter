import {
  OnQueueActive,
  OnQueueCompleted,
  OnQueueError,
  OnQueueFailed,
  Process,
  Processor,
} from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor('managerA')
export class HelloConsumer {
  constructor(private logger: Logger) {}
  @Process('hello_welcome')
  helloWelcome(job: Job) {
    console.log(`send email : ${job.data}`);
  }

  @Process('read_message')
  writeReport(job: Job) {
    console.log(`read : ${job.data}`);
  }

  @OnQueueActive()
  onActive(job: Job): void {
    this.logger.debug(
      `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }

  @OnQueueCompleted()
  onGlobalCompleted(job: Job): void {
    this.logger.debug(
      `on completed: job  ${job.id} of type ${job.name} with data ${job.data}`,
    );
  }

  @OnQueueError()
  onQueueError(error: Error): void {
    this.logger.debug(`on error: job -> error: ${error}`);
  }

  @OnQueueFailed()
  onQueueFailed(job: Job, error: Error): void {
    this.logger.debug(
      `on faild: job  ${job.id} of type ${job.name} -> result: ${error} with data ${job.data}`,
    );
  }
}
