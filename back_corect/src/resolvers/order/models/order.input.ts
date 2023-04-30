import { Field, Float, ID, InputType, Int } from '@nestjs/graphql';
import { Order, OrderedProduct } from '../../../common/interfaces/order';

@InputType()
export class OrderInput implements Order {
  @Field(() => ID)
  readonly id!: number;

  @Field(() => Date)
  readonly createdAt!: Date;

  @Field(() => [OrderedProductInput])
  readonly products!: OrderedProduct[];
}

@InputType()
export class OrderedProductInput implements OrderedProduct {
  @Field(() => ID)
  readonly id!: number;

  @Field(() => Int)
  readonly amount!: number;

  @Field(() => Float)
  readonly price!: number;
}
