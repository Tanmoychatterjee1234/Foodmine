import { Prop, Schema, SchemaFactory }
from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type OrderDocument = Order & Document;

@Schema()
export class Order {

  @Prop({ required: true })
    foodName!: string;

  @Prop({ required: true })
    price!: number;

  @Prop({ required: true })
    paymentMethod!: string;

  @Prop({
        default: Date.now
    })
    orderDate!: Date;

}

export const OrderSchema =
  SchemaFactory.createForClass(Order);