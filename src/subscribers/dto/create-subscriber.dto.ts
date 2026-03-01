import { IsArray, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import e from 'express';

export class CreateSubscriberDto {
  @IsNotEmpty({ message: 'Email khong duoc de trong' })
  @IsEmail({}, { message: 'Email khong dung dinh dang' })
  email: string;

  @IsNotEmpty({ message: 'Name khong duoc de trong' })
  name: string;
  @IsNotEmpty({ message: 'Skills khong duoc de trong' })
  @IsString({ each: true, message: 'Skill phai la mot chuoi' })
  @IsArray({ message: 'Skills phai la mot mang' })
  skills: string[];
}
