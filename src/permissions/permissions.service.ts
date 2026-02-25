import { PermissionsModule } from './permissions.module';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { IUser } from 'src/users/users.interface';
import mongoose from 'mongoose';
import { Permission, PermissionDocument } from './schemas/permission.schema';
import { InjectModel } from '@nestjs/mongoose';
import type { SoftDeleteModel } from 'soft-delete-plugin-mongoose/dist/src/soft-delete-model';
import aqp from 'api-query-params';

@Injectable()
export class PermissionsService {
  constructor(
    //dependency injections
    @InjectModel(Permission.name)
    private permissonModel: SoftDeleteModel<PermissionDocument>,
  ) {}

  async create(createPermissionDto: CreatePermissionDto, user: IUser) {
    const { apiPath, method } = createPermissionDto;

    //check ton tao
    const checkPermisson = await this.permissonModel.findOne({
      apiPath,
      method,
    });
    if (checkPermisson) {
      throw new BadRequestException(
        `Permisson voi apiPath ${apiPath} va method ${method} da ton tai`,
      );
    }

    //neu chua co tao moi
    const newPermission = await this.permissonModel.create({
      ...createPermissionDto,
      createdBy: {
        _id: user._id,
        email: user.email,
      },
    });
    return newPermission;
  }

  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, sort, projection, population } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;

    let offset = (+currentPage - 1) * +limit;
    let defaultLimit = +limit ? +limit : 10;
    const totalItems = (await this.permissonModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);

    const result = await this.permissonModel
      .find(filter)
      .skip(offset)
      .limit(defaultLimit)
      .sort(sort as any)
      .populate(population)
      .exec();

    return {
      meta: {
        current: currentPage, //trang hiện tại
        pageSize: limit, //số lượng bản ghi đã lấy
        pages: totalPages, //tổng số trang với điều kiện query
        total: totalItems, // tổng số phần tử (số bản ghi)
      },
      result, //kết quả query
    };
  }
  async findOne(id: string, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'not found permission';
    }
    return await this.permissonModel.findOne({ _id: id });
  }

  update(id: string, updatePermissionDto: UpdatePermissionDto, user: IUser) {
    return this.permissonModel.updateOne(
      { _id: id },
      {
        ...updatePermissionDto,
      },
    );
  }

  remove(id: string, user: IUser) {
    return this.permissonModel.softDelete({ _id: id });
  }
}
