import { Process, Processor } from '@nestjs/bull';

@Processor('hello')
export class HelloConsumer {
  @Process('welcome')
  helloWelcome() {
    console.log('send email `Hello Welcome`');
  }
}
