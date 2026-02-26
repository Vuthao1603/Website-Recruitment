import { UsersService } from 'src/users/users.service';
import { ConfigService } from '@nestjs/config';
import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import type { SoftDeleteModel } from 'soft-delete-plugin-mongoose/dist/src/soft-delete-model';
import {
  Permission,
  PermissionDocument,
} from 'src/permissions/schemas/permission.schema';
import { Role, RoleDocument } from 'src/roles/schemas/role.schema';
import { User, UserDocument } from 'src/users/schemas/user.schema';
import { ADMIN_ROLE, INIT_PERMISSIONS, USER_ROLE } from './sample';

@Injectable()
export class DatabasesService implements OnModuleInit {
  private readonly logger = new Logger(DatabasesService.name);
  constructor(
    @InjectModel(User.name)
    private userModel: SoftDeleteModel<UserDocument>,
    @InjectModel(Permission.name)
    private permissinModel: SoftDeleteModel<PermissionDocument>,
    @InjectModel(Role.name)
    private roleModel: SoftDeleteModel<RoleDocument>,

    private configService: ConfigService,
    private usersService: UsersService,
  ) {}

  async onModuleInit() {
    const isInit = this.configService.get<string>('SHOULD_INIT');
    if (Boolean(isInit)) {
      const countUser = await this.userModel.count({});
      const countPermission = await this.permissinModel.count({});
      const countRole = await this.roleModel.count({});

      // create ermission
      if (countPermission === 0) {
        await this.permissinModel.insertMany(INIT_PERMISSIONS);
      }

      //create role
      if (countRole === 0) {
        const permissions = await this.permissinModel.find({}).select('_id');
        await this.roleModel.insertMany([
          {
            name: ADMIN_ROLE,
            description: 'ADMIN co full quyen',
            isActive: true,
            permissions: permissions,
          },
          {
            name: USER_ROLE,
            description: 'Nguoi dung/Ung vien su dung he thong',
            isActive: true,
            permissions: [], //khong set quyen, chi can add role
          },
        ]);
      }
      //create user
      if (countUser === 0) {
        const adminRole = await this.roleModel.findOne({ name: ADMIN_ROLE });
        const userRole = await this.roleModel.findOne({ name: USER_ROLE });
        await this.userModel.insertMany([
          {
            name: 'Toi la Admin',
            email: 'admin@gamil.com',
            password: this.usersService.gethashPasswprd(
              this.configService.getOrThrow<string>('INIT_PASSWORD'),
            ),
            age: 36,
            gender: 'MALE',
            address: 'Thanh Hoa, VietNam',
            role: adminRole?._id,
          },
          {
            name: 'Toi la User',
            email: 'user@gamil.com',
            password: this.usersService.gethashPasswprd(
              this.configService.getOrThrow<string>('INIT_PASSWORD'),
            ),
            age: 36,
            gender: 'MALE',
            address: 'Thanh Hoa, VietNam',
            role: userRole?._id,
          },
        ]);
      }
      if (countUser > 0 && countRole > 0 && countPermission > 0) {
        this.logger.log('Already init sample data...');
      }
    }
  }
}
