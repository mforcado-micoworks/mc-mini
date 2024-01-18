import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller('test')
export class TestController {
  constructor(private readonly testService: TestService) {}

  @Get()
  findAll() {
    return this.testService.publish();
  }

  @EventPattern('tests')
  test(@Payload() payload: any) {
    console.log(payload);
  }
}
