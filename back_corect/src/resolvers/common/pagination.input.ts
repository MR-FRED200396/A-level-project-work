import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class PaginationInput {
  @Field(() => Int)
  readonly skip!: number;

  @Field(() => Int)
  readonly take!: number;
}
