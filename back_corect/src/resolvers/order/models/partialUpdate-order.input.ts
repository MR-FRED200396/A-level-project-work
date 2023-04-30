import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { OrderInput } from './order.input';

@InputType()
export class PartialUpdateOrderInput extends PartialType(OrderInput) {
  @Field(() => ID, { nullable: false })
  readonly id!: number;
}
