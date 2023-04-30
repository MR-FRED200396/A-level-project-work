import { ApiProperty } from '@nestjs/swagger';
import { Order, OrderedProduct } from 'src/common/interfaces/order';

export class OrderModel implements Order {
  @ApiProperty({ type: Number })
  readonly id!: number;

  @ApiProperty({ type: Date })
  readonly createdAt!: Date;

  @ApiProperty({ type: String })
  readonly products!: OrderedProduct[];
}

export class OrderedProductsModel implements OrderedProduct {
  @ApiProperty({ type: Number })
  readonly id!: number;

  @ApiProperty({ type: Number })
  readonly amount!: number;

  @ApiProperty({ type: Number })
  readonly price!: number;
}
