import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { ProductInput } from './product.input';

@InputType()
export class PartialUpdateProductInput extends PartialType(ProductInput) {
  @Field(() => ID, { nullable: false })
  readonly id!: number;
}
