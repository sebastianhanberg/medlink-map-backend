import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { HttpExceptionFilter } from './filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.enableCors({
    origin: 'http://localhost:3000', // Your frontend URL
    credentials: true,
  });

  app.useGlobalFilters(new HttpExceptionFilter());

  const port = configService.get('PORT') || 3001;
  await app.listen(port);
  console.log(`Application is running on port ${port}`);
}

bootstrap();
