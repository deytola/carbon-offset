import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const SERVER_PORT = process.env.SERVER_PORT || 4000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app
    .listen(SERVER_PORT)
    .then(() => console.log(`🚀 Server listening on port ${SERVER_PORT}`));
}
bootstrap();
