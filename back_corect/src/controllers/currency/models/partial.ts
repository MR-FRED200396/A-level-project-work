import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CurrencyModel } from './model';

export class PartialUpdateCurrency extends PartialType(CurrencyModel) {
  @ApiProperty({ type: Number, required: true })
  readonly id!: number;
}
