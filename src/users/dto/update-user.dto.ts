import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateUserDto extends OmitType(CreateUserDto, [
  'password', //omitType loai bo thuoc tinh password khi update, nos duoc ke thua tu CreateUserDto
] as const) {
  @IsNotEmpty({ message: 'id khong duoc de trong' })
  _id: string;
}
