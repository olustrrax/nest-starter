import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('managerB')
export class WriteConsumer {
  @Process('write')
  writeReport(job: Job) {
    console.log(`write report : ${job.data}`);
  }
}
