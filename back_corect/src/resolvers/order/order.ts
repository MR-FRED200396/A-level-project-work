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
import { OrderService } from 'src/services/order.service';
import { OrderInput } from './models/order.input';
import { OrderListModel, OrderModel } from './models/order.model';
import { PartialUpdateOrderInput } from './models/partialUpdate-order.input';
import { OrderSort } from './models/sort';
import { OrderWhere } from './models/where';
import { List } from 'src/common/interfaces/list';
import { PaginationInput } from '../common/pagination.input';

@ObjectType()
export class OrderQuery {
  @Field(() => OrderListModel, { nullable: true })
  readonly findAll!: OrderListModel;
  @Field(() => OrderModel, { nullable: true })
  readonly findOne!: OrderModel;
}

@Resolver(OrderQuery)
export class OrderQueryResolver {
  constructor(private readonly service: OrderService) {}

  @Query(() => OrderQuery)
  order(): boolean {
    return true;
  }

  @ResolveField(() => OrderListModel)
  async findAll(
    @Args('where', { nullable: true }) where?: OrderWhere,
    @Args('sort', { nullable: true }) sort?: OrderSort,
    @Args('pagination', { nullable: true }) pagination?: PaginationInput,
  ): Promise<List<OrderModel>> {
    return this.service.findAll(where, sort, pagination);
  }

  @ResolveField(() => OrderModel)
  async findOne(
    @Args('id', { type: () => ID }) id: number,
  ): Promise<OrderModel> {
    return this.service.findOne(id);
  }
}

@ObjectType()
export class OrderMutation {
  @Field(() => OrderModel, { nullable: true })
  readonly create!: OrderModel;

  @Field({ nullable: true })
  readonly update!: OrderModel;

  @Field({ nullable: true })
  readonly delete!: boolean;
}

@Resolver(OrderMutation)
export class OrderMutationResolver {
  constructor(private readonly service: OrderService) {}

  @Mutation(() => OrderMutation)
  order(): boolean {
    return true;
  }

  @ResolveField(() => OrderModel)
  async create(@Args('input') input: OrderInput): Promise<OrderModel> {
    return this.service.create(input);
  }

  @ResolveField(() => OrderModel)
  async update(@Args('input') input: OrderInput): Promise<OrderModel> {
    return this.service.update(input);
  }

  @ResolveField(() => OrderModel)
  async partialUpdate(
    @Args('input') input: PartialUpdateOrderInput,
  ): Promise<OrderModel> {
    return this.service.partialUpdate(input);
  }

  @ResolveField(() => Boolean)
  async delete(@Args('id', { type: () => ID }) id: number): Promise<boolean> {
    return this.service.delete(id);
  }
}
