import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  sayHello(): string {
    return 'Hello everyone!!';
  }

  getHello(): string {
    return 'Hello World!ㄴㄴ';
  }
}
