import { IsMongoId, IsNotEmpty } from 'class-validator';
import mongoose, { mongo } from 'mongoose';

export class CreateResumeDto {
  @IsNotEmpty({ message: 'Email không được để trống' })
  email: string;
  @IsNotEmpty({ message: 'URL không được để trống' })
  url: string;
  @IsNotEmpty({ message: 'CompanyId không được để trống' })
  companyId: string;
  @IsNotEmpty({ message: 'JobId không được để trống' })
  jobId: string;
  @IsNotEmpty({ message: 'UserId không được để trống' })
  userId: string;
  @IsNotEmpty({ message: 'Status không được để trống' })
  status: string;
}

export class CreateUserCvDto {
  @IsNotEmpty({ message: 'Url không được để trống' })
  url: string;

  @IsNotEmpty({ message: 'CompanyId không được để trống' })
  @IsMongoId({ message: 'CompanyId phải là định dạng MongoId' })
  companyId: mongoose.Schema.Types.ObjectId;

  @IsNotEmpty({ message: 'JobId không được để trống' })
  @IsMongoId({ message: 'JobId phải là định dạng MongoId' })
  jobId: mongoose.Schema.Types.ObjectId;
}
