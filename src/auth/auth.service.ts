import { register } from 'module';
import { User } from 'src/decorator/customize';
import { Injectable } from '@nestjs/common';
import e from 'express';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/users/users.interface';
import { genSaltSync, hashSync } from 'bcrypt';
import { RegisterUserDto } from 'src/users/dto/create-user.dto';
import { create } from 'domain';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    if (user) {
      const isValid = this.usersService.isValidUserPassword(
        pass,
        user.password,
      );
      if (isValid === true) {
        return user;
      }
    } else {
      return null;
    }
  }

  async login(user: IUser) {
    const { _id, name, email, role } = user;
    const payload = {
      sub: 'token login',
      iss: 'from server',
      _id,
      name,
      email,
      role,
    };
    return {
      //tao token
      access_token: this.jwtService.sign(payload),
      _id,
      name,
      email,
      role,
    };
  }

  async register(user: RegisterUserDto) {
    let newUser = await this.usersService.register(user);
    return {
      _id: newUser?._id,
      createdAt: newUser?.createAt,
    };
  }
}
