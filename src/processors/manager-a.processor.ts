import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';

@Processor('managerA')
export class HelloConsumer {
  @Process('hello_welcome')
  helloWelcome(job: Job) {
    console.log(`send email : ${job.data}`);
  }

  @Process('read_message')
  writeReport(job: Job) {
    console.log(`read : ${job.data}`);
  }
}
