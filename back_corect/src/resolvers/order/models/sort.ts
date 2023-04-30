import { Field, InputType } from '@nestjs/graphql';
import { Direction } from '../../../common/enums/direction';
import { Order } from '../../../common/interfaces/order';
import { Sort } from '../../../common/interfaces/sort';

@InputType()
export class OrderSort implements Sort<Order> {
  @Field(() => Direction, { nullable: true })
  readonly id?: Direction;
}
