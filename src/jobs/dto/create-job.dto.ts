import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  ValidateNested,
} from 'class-validator';
import mongoose from 'mongoose';

export class CreateJobDto {
  @IsNotEmpty({ message: 'Ten cong viec khong duoc de trong' })
  name: string;

  @IsNotEmpty({ message: 'Ky nang khong duoc de trong' })
  skills: string[];

  @IsNotEmpty({ message: 'Dia diem khong duoc de trong' })
  location: string;
  @IsNotEmpty({ message: 'Muc luong khong duoc de trong' })
  salary: number;
  @IsNotEmpty({ message: 'So luong khong duoc de trong' })
  quantity: number;
  @IsNotEmpty({ message: 'Cap bac khong duoc de trong' })
  level: string;
  @IsNotEmpty({ message: 'Mo ta khong duoc de trong' })
  description: string;
  @IsNotEmpty({ message: 'Ngay bat dau khong duoc de trong' })
  startDate: Date;
  @IsNotEmpty({ message: 'Ngay ket thuc khong duoc de trong' })
  endDate: Date;
}
