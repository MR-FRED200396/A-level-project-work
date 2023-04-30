import { Field, ID, InputType } from '@nestjs/graphql';
import { Product } from '../../../common/interfaces/product';

@InputType()
export class ProductInput implements Product {
  @Field(() => String)
  readonly name!: string;

  @Field(() => ID)
  readonly id!: number;
}
