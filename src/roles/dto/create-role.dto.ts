import { IsBoolean, IsMongoId, IsNotEmpty, IsString } from 'class-validator';
import mongoose from 'mongoose';

export class CreateRoleDto {
  @IsNotEmpty({ message: 'Ten cong viec khong duoc de trong' })
  name: string;
  @IsNotEmpty({ message: 'Mo ta khong duoc de trong' })
  description: string;

  @IsNotEmpty({ message: 'Quyen han khong duoc de trong' })
  @IsMongoId({ each: true, message: 'each permission la mongo object id' })
  permissions: mongoose.Schema.Types.ObjectId[];

  @IsNotEmpty({ message: 'Dia diem khong duoc de trong' })
  @IsBoolean({ message: 'isActive co gia tri boolen' })
  isActive: boolean;
}
