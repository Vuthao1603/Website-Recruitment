import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]), // name dau tien la dinh danh, giong nhu id, kh phai thuoc tinh trong schema
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
