import { Field, Float, ID, Int, ObjectType } from '@nestjs/graphql';
import { Order, OrderedProduct } from '../../../common/interfaces/order';
import { List } from 'src/common/interfaces/list';

@ObjectType()
export class OrderModel implements Order {
  @Field(() => ID)
  readonly id!: number;

  @Field(() => Date)
  readonly createdAt!: Date;

  @Field(() => [OrderProductModel])
  readonly products!: OrderedProduct[];
}

@ObjectType()
export class OrderProductModel implements OrderedProduct {
  @Field(() => ID)
  readonly id!: number;

  @Field(() => Float)
  readonly amount!: number;

  @Field(() => Float)
  readonly price!: number;
}

@ObjectType()
export class OrderListModel implements List<Order> {
  @Field(() => [OrderModel])
  readonly items!: OrderModel[];

  @Field(() => Int)
  readonly totalCount!: number;
}
