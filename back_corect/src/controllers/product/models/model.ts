import { ApiProperty } from '@nestjs/swagger';
import { Product } from '../../../common/interfaces/product';

export class ProductModel implements Product {
  @ApiProperty({ type: Number })
  readonly id!: number;

  @ApiProperty({ type: String })
  readonly name!: string;
}
