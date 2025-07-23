import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:8080',
  });

  const config = new DocumentBuilder()
    .setTitle('Movies API')
    .setDescription('API for listing and viewing movie details')
    .setVersion('1.0')
    .addTag('movies')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document); // Documentação acessível em http://localhost:3002/docs

  await app.listen(process.env.PORT ?? 3002);
}

void bootstrap();
