import { ApiProperty } from '@nestjs/swagger';
import { Sort } from '../../../common/interfaces/sort';
import { Order } from '../../../common/interfaces/order';
import { Direction } from '../../../common/enums/direction';

export class OrderSort implements Sort<Order> {
  @ApiProperty({ enum: Direction })
  readonly id?: Direction;
}
