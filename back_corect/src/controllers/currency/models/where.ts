import { ApiProperty } from '@nestjs/swagger';
import { Where } from 'src/common/interfaces/where';
import { Currency } from '../../../common/interfaces/currency';

export class CurrencyWhere implements Where<Currency> {
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
