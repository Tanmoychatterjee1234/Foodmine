import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from './schemas/order.schema';
import { Model } from 'mongoose';
import { CreateOrderDto } from './dtos/create-order.dto';

@Injectable()
export class OrdersService {
        constructor(

            @InjectModel(Order.name)
            private orderModel:
                Model<OrderDocument>

        ) { }

    async createOrder(
        createOrderDto: CreateOrderDto
    ): Promise<Order> {

        const order =
            new this.orderModel(createOrderDto);

        return order.save();

    }
}
