import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const configService = app.get(ConfigService);

  app.useStaticAssets(join(__dirname, '..', 'public')); //js, css, img
  app.setBaseViewsDir(join(__dirname, '..', 'views')); //views
  app.setViewEngine('ejs'); //su dung ejs thay vi hlb (mac dinh cua nestjs la hbs)

  app.useGlobalPipes(new ValidationPipe()); //su dung class-validator o muc toan cuc

  await app.listen(String(configService.get<string>('PORT')));
}
bootstrap();
