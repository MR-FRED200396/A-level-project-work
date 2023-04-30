import { ApiProperty, PartialType } from '@nestjs/swagger';
import { OrderModel } from './model';

export class PartialUpdateOrder extends PartialType(OrderModel) {
  @ApiProperty({ type: Number, required: true })
  readonly id!: number;
}
