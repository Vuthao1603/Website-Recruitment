import { ConfigService } from '@nestjs/config';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { IUser } from 'src/users/users.interface';
import { RolesService } from 'src/roles/roles.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private ConfigService: ConfigService,
    private roleService: RolesService,
  ) {
    super({
      //decode token
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: ConfigService.getOrThrow<string>('JWT_ACCESS_TOKEN_SECRET'),
    });
  }

  async validate(payload: IUser) {
    //decoded token sau khi xac thuc thanh cong
    //can gan them permission vao payload de sau nay co the check quyen truy cap endpoint
    const { _id, name, email, role } = payload;
    const userRole = role as unknown as { _id: string; name: string };
    const temp = (await this.roleService.findOne(userRole._id))?.toObject();

    return { _id, name, email, role, permissions: temp?.permissions ?? [] }; // thong tin tra ra bien req.user
  }
}
