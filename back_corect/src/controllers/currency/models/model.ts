import { ApiProperty } from '@nestjs/swagger';
import { Currency } from '../../../common/interfaces/currency';

export class CurrencyModel implements Currency {
  @ApiProperty({ type: Number })
  readonly id!: number;

  @ApiProperty({ type: String })
  readonly symbol!: string;

  @ApiProperty({ type: String })
  readonly name!: string;

  @ApiProperty({ type: String })
  readonly symbol_native!: string;

  @ApiProperty({ type: Number })
  readonly decimal_digits!: number;

  @ApiProperty({ type: Number })
  readonly rounding!: number;

  @ApiProperty({ type: String })
  readonly name_plural!: string;

  @ApiProperty({ type: Number })
  exchange_rate!: number;
}
