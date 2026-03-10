import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe, VersioningType } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { TransformInterceptor } from './core/transform.interceptor';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  const configService = app.get(ConfigService);

  const reflector = app.get(Reflector);
  app.useGlobalGuards(new JwtAuthGuard(reflector)); //them guard toan cuc
  app.useGlobalInterceptors(new TransformInterceptor(reflector)); //su dung interceptor toan cuc

  app.useStaticAssets(join(__dirname, '..', 'public')); //js, css, img
  app.setBaseViewsDir(join(__dirname, '..', 'views')); //views
  app.setViewEngine('ejs'); //su dung ejs thay vi hlb (mac dinh cua nestjs la hbs)

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: false, //loai bo nhung truong khong co trong DTO
    }),
  ); //su dung class-validator o muc toan cuc

  //config cookie parser
  app.use(cookieParser());
  //config cors
  app.enableCors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    credentials: true,
  });

  //config versioning
  app.setGlobalPrefix('api'); //tien to
  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: ['1', '2'], //v1, v2
  });

  //config helmet
  app.use(helmet());

  //config swagger

  const config = new DocumentBuilder()
    .setTitle('NestJS web recruiment API')
    .setDescription('All model API')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'Bearer',
        bearerFormat: 'JWT',
        in: 'header',
      },
      'token',
    )
    .addSecurityRequirements('token')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, documentFactory, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  await app.listen(String(configService.get<string>('PORT')));
}
bootstrap();
