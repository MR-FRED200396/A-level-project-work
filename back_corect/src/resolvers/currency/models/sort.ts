import { Field, InputType } from '@nestjs/graphql';
import { Direction } from '../../../common/enums/direction';
import { Currency } from '../../../common/interfaces/currency';
import { Sort } from '../../../common/interfaces/sort';

@InputType()
export class CurrencySort implements Sort<Currency> {
  @Field(() => Direction, { nullable: true })
  readonly id?: Direction;

  @Field(() => Direction, { nullable: true })
  readonly symbol?: Direction;

  @Field(() => Direction, { nullable: true })
  readonly name?: Direction;

  @Field(() => Direction, { nullable: true })
  readonly symbol_native?: Direction;

  @Field(() => Direction, { nullable: true })
  readonly decimal_digits?: Direction;

  @Field(() => Direction, { nullable: true })
  readonly rounding?: Direction;

  @Field(() => Direction, { nullable: true })
  readonly name_plural?: Direction;
}
