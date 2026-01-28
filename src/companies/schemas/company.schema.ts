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

  @Prop()
  createAt: Date;
  @Prop()
  updateAt: Date;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
