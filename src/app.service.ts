import { Injectable } from '@nestjs/common';

@Injectable() //nhaucngcap
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
