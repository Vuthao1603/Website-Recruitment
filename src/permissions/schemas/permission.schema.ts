import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type PermissionDocument = HydratedDocument<Permission>;
@Schema({ timestamps: true }) //tu dong them createdAt va updatedAt vao mongodb
export class Permission {
  @Prop()
  name: string;
  @Prop()
  apiPath: string;

  @Prop()
  method: string;
  @Prop()
  module: string;

  @Prop()
  idDeleted: boolean; //soft delete

  @Prop()
  deleteAt: Date;

  @Prop({ type: Object })
  createdBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };

  @Prop({ type: Object })
  updatedBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };

  @Prop({ type: Object })
  deletedBy: {
    _id: mongoose.Schema.Types.ObjectId;
    email: string;
  };
}

export const PermissionSchema = SchemaFactory.createForClass(Permission);
