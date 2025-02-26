import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log("Application started on http://localhost:" + process.env.APPLICATION_PORT);

  await app.listen(process.env.APPLICATION_PORT || 3002);
}
bootstrap();
