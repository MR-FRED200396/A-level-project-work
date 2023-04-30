import { Field, ID, InputType } from '@nestjs/graphql';
import { Category } from '../../../common/interfaces/category';

@InputType()
export class CategoryInput implements Category {
  @Field(() => String)
  readonly name!: string;

  @Field(() => ID)
  readonly id!: number;
}
