import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

// NOTE: controller는 url을 가져오는 역할만 함 (비즈니스 로직은 서비스로 분리)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/') // Get router
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello')
  sayHello(): string {
    return 'helllo';
  }
}
