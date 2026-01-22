import { Injectable } from '@nestjs/common';
import e from 'express';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

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
}
