import { ValidationPipe, BadRequestException } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      exceptionFactory: (errors) => {
        const messages = errors.map((err) => {
          const constraints = Object.values(err.constraints).join(', ');
          return `${constraints}`;
        });

        return new BadRequestException(
          messages.length === 1 ? messages[0] : messages,
        );
      },
    }),
  );

  await app.listen(3000);
}
bootstrap();
