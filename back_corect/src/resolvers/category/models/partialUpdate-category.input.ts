import { Field, ID, InputType, PartialType } from '@nestjs/graphql';
import { CategoryInput } from './category.input';

@InputType()
export class PartialUpdateCategoryInput extends PartialType(CategoryInput) {
  @Field(() => ID, { nullable: false })
  readonly id!: number;
}
