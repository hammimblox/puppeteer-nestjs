import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Increase request size limit to 50MB (adjust as needed)
  app.use(bodyParser.json({ limit: '500mb', }));
  app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));


  console.log("Application started on http://localhost:" + process.env.APPLICATION_PORT);

  
  await app.listen(process.env.APPLICATION_PORT || 3002);
}
bootstrap();
