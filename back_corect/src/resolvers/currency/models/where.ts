import { InputType, PartialType } from '@nestjs/graphql';
import { CurrencyInput } from './currency.input';

@InputType()
export class CurrencyWhere extends PartialType(CurrencyInput) {}
