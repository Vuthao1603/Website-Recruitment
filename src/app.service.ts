import { Injectable } from '@nestjs/common';

@Injectable() //nhaucngcap
export class AppService {
  getHello(): string {
    //model: code
    return 'Hello World!';
  }
}
