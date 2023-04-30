import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { Product } from '../../../common/interfaces/product';
import { List } from 'src/common/interfaces/list';

@ObjectType()
export class ProductModel implements Product {
  @Field(() => String)
  readonly name!: string;

  @Field(() => ID)
  readonly id!: number;
}

@ObjectType()
export class ProductListModel implements List<Product> {
  @Field(() => [ProductModel])
  readonly items!: ProductModel[];

  @Field(() => Int)
  readonly totalCount!: number;
}

