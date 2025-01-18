import { Module } from '@nestjs/common';
import { UtilsService } from './utils/utils.service';
import { TestController } from './test/test.controller';

@Module({
  imports: [],
  controllers: [TestController],
  providers: [UtilsService],
})
export class AppModule {}
