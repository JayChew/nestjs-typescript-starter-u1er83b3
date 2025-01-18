import { Body, Controller, Post } from '@nestjs/common';
import { UtilsService } from '../utils/utils.service';
import { IsNumber } from 'class-validator';

class TestDto {
  @IsNumber()
  num: number;
}

@Controller('api')
export class TestController {
  constructor(private readonly utilsService: UtilsService) {}

  @Post('test')
  test(@Body() body: TestDto): number {
    const { num } = body;
    return this.utilsService.double(num);
  }
}
