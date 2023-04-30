import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { CurrencyInput } from './currency.input';

@InputType()
export class PartialUpdateCurrencyInput extends PartialType(CurrencyInput) {
  @Field(() => ID, { nullable: false })
  readonly id!: number;
}
