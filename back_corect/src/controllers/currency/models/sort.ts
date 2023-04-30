import { ApiProperty } from '@nestjs/swagger';
import { Sort } from '../../../common/interfaces/sort';
import { Currency } from '../../../common/interfaces/currency';
import { Direction } from '../../../common/enums/direction';

export class CurrencySort implements Sort<Currency> {
  @ApiProperty({ enum: Direction })
  readonly id?: Direction;

  @ApiProperty({ enum: Direction })
  readonly symbol?: Direction;

  @ApiProperty({ enum: Direction })
  readonly name?: Direction;

  @ApiProperty({ enum: Direction })
  readonly symbol_native?: Direction;

  @ApiProperty({ enum: Direction })
  readonly decimal_digits?: Direction;

  @ApiProperty({ enum: Direction })
  readonly rounding?: Direction;

  @ApiProperty({ enum: Direction })
  readonly name_plural?: Direction;
}
