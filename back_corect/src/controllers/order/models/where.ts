import { ApiProperty } from '@nestjs/swagger';
import { Where } from 'src/common/interfaces/where';
import { Order } from '../../../common/interfaces/order';

export class OrderWhere implements Where<Order> {
  @ApiProperty({ type: Number })
  readonly id?: number;
}
