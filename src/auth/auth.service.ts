import { ConfigService } from '@nestjs/config';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { IUser } from 'src/users/users.interface';
import { RegisterUserDto } from 'src/users/dto/create-user.dto';
import { response, type Response } from 'express';
import ms, { StringValue } from 'ms';
import { RolesService } from 'src/roles/roles.service';
import { permission } from 'process';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private configService: ConfigService,
    private roleService: RolesService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    if (user) {
      const isValid = this.usersService.isValidUserPassword(
        pass,
        user.password,
      );
      if (isValid === true) {
        const userRole = user.role as unknown as { _id: string; name: string };
        const temp = await this.roleService.findOne(userRole._id);

        const objUser = {
          ...user.toObject(),
          permission: temp?.permissions ?? [],
        };
        return objUser;
      }
    } else {
      return null;
    }
  }

  async login(user: IUser, response: Response) {
    const { _id, name, email, role, permission } = user;
    const payload = {
      sub: 'token login',
      iss: 'from server',
      _id,
      name,
      email,
      role,
    };

    const refresh_token = this.createRefreshToken(payload);

    //update user with refresh token(phia db)
    await this.usersService.updateUserToken(refresh_token, _id);

    //set refresh_token as cookies
    response.cookie('refresh_token', refresh_token, {
      httpOnly: true,
      maxAge: ms(
        this.configService.getOrThrow('JWT_REFRESH_EXPRIES') as StringValue,
      ),
    });

    return {
      //tao token
      access_token: this.jwtService.sign(payload),
      refresh_token,
      user: {
        _id,
        name,
        email,
        role,
        permission,
      },
    };
  }

  async register(user: RegisterUserDto) {
    let newUser = await this.usersService.register(user);
    return {
      _id: newUser?._id,
      createdAt: newUser?.createAt,
    };
  }

  createRefreshToken = (payload: any) => {
    //tao token
    const refresh_token = this.jwtService.sign(payload, {
      secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
      expiresIn: this.configService.getOrThrow('JWT_REFRESH_EXPRIES'),
    });
    return refresh_token;
  };

  processNewToken = async (refreshToken: string, response: Response) => {
    //verify refresh token
    try {
      this.jwtService.verify(refreshToken, {
        secret: this.configService.get<string>('JWT_REFRESH_TOKEN_SECRET'),
      });
      let user = await this.usersService.findUserByToken(refreshToken);
      console.log('user tim dc', user);
      if (user) {
        //update refresh token moi
        const { _id, name, email, role } = user;
        const payload = {
          sub: 'token refresh',
          iss: 'from server',
          _id,
          name,
          email,
          role,
        };

        const refresh_token = this.createRefreshToken(payload);

        //update user with refresh token(phia db)
        await this.usersService.updateUserToken(refresh_token, _id.toString());

        //fetch user role
        const userRole = user.role as unknown as { _id: string; name: string };
        const temp = await this.roleService.findOne(userRole._id);

        //set refresh_token as cookies
        response.clearCookie('refresh_token');

        response.cookie('refresh_token', refresh_token, {
          httpOnly: true,
          maxAge: ms(
            this.configService.getOrThrow('JWT_REFRESH_EXPRIES') as StringValue,
          ),
        });

        return {
          //tao token
          access_token: this.jwtService.sign(payload),
          refresh_token,
          user: {
            _id,
            name,
            email,
            role,
            permission: temp?.permissions ?? [],
          },
        };
      } else {
        throw new BadRequestException(
          'Refresh token khong hop le, Vui long dang nhap lai',
        );
      }
    } catch (error) {
      throw new BadRequestException(
        'Refresh token khong hop le, Vui long dang nhap lai',
      );
    }
  };

  logout = async (response: Response, user: IUser) => {
    await this.usersService.updateUserToken('', user._id);
    response.clearCookie('refresh_token');
    return 'ok';
  };
}
