import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Category } from '../../../common/interfaces/category';
import { List } from 'src/common/interfaces/list';

@ObjectType()
export class CategoryModel implements Category {
  @Field(() => String)
  readonly name!: string;

  @Field(() => ID)
  readonly id!: number;
}

@ObjectType()
export class CategoryListModel implements List<Category> {
  @Field(() => [CategoryModel])
  readonly items!: CategoryModel[];

  @Field(() => Int)
  readonly totalCount!: number;
}
