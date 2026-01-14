import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends OmitType(CreateUserDto, [
  'password', //omitType loai bo thuoc tinh password khi update, nos duoc ke thua tu CreateUserDto
] as const) {
  _id: string;
}
