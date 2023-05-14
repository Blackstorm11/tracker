"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const jwt_guard_1 = require("./auth/guard/jwt.guard");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useGlobalGuards(new jwt_guard_1.JwtAuthGuard());
    const options = new swagger_1.DocumentBuilder()
        .setTitle("GitExtention")
        .setDescription("Git_application rest api docs")
        .setVersion("1.0")
        .addBearerAuth({
        type: "http",
        scheme: 'bearer',
        bearerFormat: "jwt",
        name: "JWT",
        description: "Enter JWT Token",
        in: "header"
    }, "JWT-auth").build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup("api", app, document);
    await app.listen(3001);
}
bootstrap();
//# sourceMappingURL=main.js.map