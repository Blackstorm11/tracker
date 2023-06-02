import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder,SwaggerModule} from '@nestjs/swagger'
import { JwtAuthGuard } from './auth/guard/jwt.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // app.useGlobalGuards(new JwtAuthGuard())

  const options = new DocumentBuilder()
  .setTitle("GitExtention")
  .setDescription("Git_application rest api docs")
  .setVersion("1.0")
  .addBearerAuth({
    type: "http",
    scheme :  'bearer',
    bearerFormat:"jwt",
    name: "JWT",
    description: "Enter JWT Token",
    in : "header"
  } , "JWT-auth").build();

  const document=SwaggerModule.createDocument(app,options);
  SwaggerModule.setup("api", app, document);
  await app.listen(3001);
}
bootstrap();
