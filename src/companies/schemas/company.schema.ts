import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type CompanyDocument = HydratedDocument<Company>;

@Schema({ timestamps: true }) //tu dong them createdAt va updatedAt vao mongodb
export class Company {
  @Prop()
  name: string;

  @Prop()
  address: string;

  @Prop()
  description: string;

  @Prop({ type: Object })
  createdBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };

  // @Prop({
  //   type: {
  //     _id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  //     email: { type: String },
  //   },
  // })
  // updatedBy: {
  //   _id: mongoose.Schema.Types.ObjectId;
  //   email: string;
  // };

  @Prop({ type: Object })
  updatedBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };

  // @Prop({
  //   type: {
  //     _id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  //     email: { type: String },
  //   },
  // })
  // deletedBy: {
  //   _id: mongoose.Schema.Types.ObjectId;
  //   email: string;
  // };

  @Prop({ type: Object })
  deletedBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };

  @Prop()
  createAt: Date;
  @Prop()
  updateAt: Date;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
