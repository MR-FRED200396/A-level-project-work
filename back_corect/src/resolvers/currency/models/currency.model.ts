import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Currency } from '../../../common/interfaces/currency';
import { List } from 'src/common/interfaces/list';

@ObjectType()
export class CurrencyModel implements Currency {
  @Field(() => String)
  readonly symbol!: string;

  @Field(() => String)
  readonly name!: string;

  @Field(() => String)
  readonly symbol_native!: string;

  @Field(() => Number)
  readonly decimal_digits!: number;

  @Field(() => Number)
  readonly rounding!: number;

  @Field(() => ID)
  readonly id!: number;

  @Field(() => String)
  readonly name_plural!: string;

  @Field(() => Number)
  readonly exchange_rate!: number;
}

@ObjectType()
export class CurrencyListModel implements List<Currency> {
  @Field(() => [CurrencyModel])
  readonly items!: CurrencyModel[];

  @Field(() => Int)
  readonly totalCount!: number;
}
