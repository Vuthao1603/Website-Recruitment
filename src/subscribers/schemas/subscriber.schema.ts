import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type SubscribersDocument = HydratedDocument<Subscriber>;
@Schema({ timestamps: true }) //tu dong them createdAt va updatedAt vao mongodb
export class Subscriber {
  @Prop()
  email: string;

  @Prop()
  name: string;
  @Prop()
  skills: string[];
}
export const SubscriberSchema = SchemaFactory.createForClass(Subscriber);
