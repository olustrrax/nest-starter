import { NestApplication, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import BullBoardUI from './bull-ui';

async function bootstrap() {
  const app = await NestFactory.create<NestApplication>(AppModule);
  BullBoardUI(app);
  await app.listen(3000);
}
bootstrap();
