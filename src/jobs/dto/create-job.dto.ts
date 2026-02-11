import { Transform, Type } from 'class-transformer';
import {
  IsArray,
  IsBoolean,
  IsDate,
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  IsString,
  ValidateNested,
} from 'class-validator';
import mongoose from 'mongoose';
import { Company } from 'src/companies/schemas/company.schema';

export class CreateJobDto {
  @IsNotEmpty({ message: 'Ten cong viec khong duoc de trong' })
  name: string;

  @IsNotEmpty({ message: 'Ky nang khong duoc de trong' })
  @IsArray({ message: 'Ky nang phai la mot mang' })
  @IsString({ each: true, message: 'Skill dinh dang la string' })
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

  // @IsNotEmpty({ message: 'Logo khong duoc de trong' })
  // logo: string;

  @IsNotEmpty({ message: 'Ngay bat dau khong duoc de trong' })
  @Transform(({ value }) => new Date(value))
  @IsDate({ message: 'startDate co dinh dang Date' })
  startDate: Date;

  @IsNotEmpty({ message: 'Ngay ket thuc khong duoc de trong' })
  @Transform(({ value }) => new Date(value))
  @IsDate({ message: 'endDate co dinh dang Date' })
  endDate: Date;

  @IsNotEmpty({ message: 'isActive khong duoc de trong' })
  @IsBoolean({ message: 'isActive co dinh dang boolean' })
  isActive: boolean;

  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => Company)
  company: Company;
}
