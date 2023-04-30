import { ApiProperty } from '@nestjs/swagger';
import { Where } from '../../../common/interfaces/where';
import { Product } from '../../../common/interfaces/product';

export class ProductWhere implements Where<Product> {
  @ApiProperty({ type: Number })
  readonly id?: number;

  @ApiProperty({ type: String })
  readonly symbol?: string;

  @ApiProperty({ type: String })
  readonly name?: string;

  @ApiProperty({ type: String })
  readonly symbol_native?: string;

  @ApiProperty({ type: Number })
  readonly decimal_digits?: number;

  @ApiProperty({ type: Number })
  readonly rounding?: number;

  @ApiProperty({ type: String })
  readonly name_plural?: string;
}
