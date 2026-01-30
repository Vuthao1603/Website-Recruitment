import { Company } from './../companies/schemas/company.schema';
import type { SoftDeleteModel } from './../../node_modules/soft-delete-plugin-mongoose/dist/src/soft-delete-model.d';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto, RegisterUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User as UserM, UserDocument } from './schemas/user.schema';
import mongoose, { Model } from 'mongoose';
import { genSaltSync, hashSync, compareSync } from 'bcrypt';
import type { IUser } from './users.interface';
import { User } from 'src/decorator/customize';
import aqp from 'api-query-params';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserM.name)
    private userModel: SoftDeleteModel<UserDocument>,
  ) {}

  gethashPasswprd = (password: string) => {
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);
    return hash;
  };

  async create(createUserDto: CreateUserDto, @User() user: IUser) {
    const { name, email, password, age, address, gender, role, company } =
      createUserDto;
    //check email da ton tai chua
    const isExits = await this.userModel.findOne({ email });
    if (isExits) {
      throw new BadRequestException(
        `email: ${email} da ton tai trong he thong`,
      );
    }
    const hashedPassword = this.gethashPasswprd(createUserDto.password); //hash password truoc khi luu vao db

    let newUser = await this.userModel.create({
      email: email,
      password: hashedPassword,
      name: name,
      age: age,
      address: address,
      gender: gender,
      role: role,
      company: company,
      createdBy: { _id: user._id, email: user.email },
    });
    return newUser;
  }

  async register(user: RegisterUserDto) {
    const { name, email, password, age, address, gender } = user;

    //check email da ton tai chua
    const isExits = await this.userModel.findOne({ email });
    if (isExits) {
      throw new BadRequestException(
        `email: ${email} da ton tai trong he thong`,
      );
    }
    const hashedPassword = this.gethashPasswprd(password); //hash password truoc khi luu vao db
    let newRegister = await this.userModel.create({
      email: email,
      password: hashedPassword,
      name: name,
      age: age,
      address: address,
      gender: gender,
      role: 'USER', //mac dinh role la USER
    });
    return newRegister;
  }

  async findAll(currentPage: number, limit: number, qs: string) {
    const { filter, sort, projection, population } = aqp(qs);
    delete filter.page;
    delete filter.limit;

    let offset = (+currentPage - 1) * +limit;
    let defaultLimit = +limit ? +limit : 10;
    const totalItems = (await this.userModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);

    const result = await this.userModel
      .find(filter)
      .skip(offset)
      .limit(defaultLimit)
      .sort(sort as any)
      .select('-password') //khong tra ve password
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

  async findOne(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return `not found user`;
    }
    return await this.userModel.findOne({ _id: id }).select('-password'); //khong tra ve password
  }

  findOneByUsername(username: string) {
    // if (!mongoose.Types.ObjectId.isValid(username)) {
    //   return `not found user`;
    // }
    return this.userModel.findOne({ email: username });
  }

  isValidUserPassword(password: string, hash: string) {
    return compareSync(password, hash);
  }

  async update(updateUserDto: UpdateUserDto, user: IUser) {
    const update = await this.userModel.updateOne(
      {
        _id: updateUserDto._id,
      },
      {
        ...updateUserDto,
        updatedBy: { _id: user._id, email: user.email },
      },
    );
    return update;
  }

  async remove(id: string, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return `not found user`;
    }
    await this.userModel.updateOne(
      { _id: id },
      {
        deletedBy: { _id: user._id, email: user.email },
      },
    );
    return this.userModel.softDelete({ _id: id }); //soft delete
  }
}
