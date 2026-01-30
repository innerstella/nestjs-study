import { Injectable } from '@nestjs/common';

// NOTE: service는 비즈니스 로직을 처리하는 역할
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

}
