import {
  Args,
  Field,
  ID,
  Mutation,
  ObjectType,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { CurrencyService } from 'src/services/currency.service';
import { CurrencyInput } from './models/currency.input';
import { CurrencyListModel, CurrencyModel } from './models/currency.model';
import { PartialUpdateCurrencyInput } from './models/partialUpdate-currency.input';
import { CurrencySort } from './models/sort';
import { CurrencyWhere } from './models/where';
import { PaginationInput } from '../common/pagination.input';
import { List } from 'src/common/interfaces/list';

@ObjectType()
export class CurrencyQuery {
  @Field(() => CurrencyListModel, { nullable: true })
  readonly findAll!: CurrencyListModel;
  @Field(() => CurrencyModel, { nullable: true })
  readonly findOne!: CurrencyModel;
}

@Resolver(CurrencyQuery)
export class CurrencyQueryResolver {
  constructor(private readonly service: CurrencyService) {}

  @Query(() => CurrencyQuery)
  currency(): boolean {
    return true;
  }

  @ResolveField(() => [CurrencyListModel])
  async findAll(
    @Args('where', { nullable: true }) where?: CurrencyWhere,
    @Args('sort', { nullable: true }) sort?: CurrencySort,
    @Args('pagination', { nullable: true }) pagination?: PaginationInput,
  ): Promise<List<CurrencyModel>> {
    return this.service.findAll(where, sort, pagination);
  }

  @ResolveField(() => CurrencyModel)
  async findOne(
    @Args('id', { type: () => ID }) id: number,
  ): Promise<CurrencyModel> {
    return this.service.findOne(id);
  }
}

@ObjectType()
export class CurrencyMutation {
  @Field(() => CurrencyModel, { nullable: true })
  readonly create!: CurrencyModel;

  @Field({ nullable: true })
  readonly update!: CurrencyModel;

  @Field({ nullable: true })
  readonly delete!: boolean;
}

@Resolver(CurrencyMutation)
export class CurrencyMutationResolver {
  constructor(private readonly service: CurrencyService) {}

  @Mutation(() => CurrencyMutation)
  currency(): boolean {
    return true;
  }

  @ResolveField(() => CurrencyModel)
  async create(@Args('input') input: CurrencyInput): Promise<CurrencyModel> {
    return this.service.create(input);
  }

  @ResolveField(() => CurrencyModel)
  async update(@Args('input') input: CurrencyInput): Promise<CurrencyModel> {
    return this.service.update(input);
  }

  @ResolveField(() => CurrencyModel)
  async partialUpdate(
    @Args('input') input: PartialUpdateCurrencyInput,
  ): Promise<CurrencyModel> {
    return this.service.partialUpdate(input);
  }

  @ResolveField(() => Boolean)
  async delete(@Args('id', { type: () => ID }) id: number): Promise<boolean> {
    return this.service.delete(id);
  }
}
