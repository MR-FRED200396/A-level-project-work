import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ServicesModule } from 'src/services/services.module';
import {
  CurrencyMutationResolver,
  CurrencyQueryResolver,
} from './currency/currency';
import './common/direction.input';
import {
  CategoryMutationResolver,
  CategoryQueryResolver,
} from './category/category';
import {
  ProductMutationResolver,
  ProductQueryResolver,
} from './product/product';
import { OrderMutationResolver, OrderQueryResolver } from './order/order';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: true,
    }),
    ServicesModule,
  ],
  providers: [
    OrderQueryResolver,
    OrderMutationResolver,
    CurrencyQueryResolver,
    CurrencyMutationResolver,
    CategoryQueryResolver,
    CategoryMutationResolver,
    ProductQueryResolver,
    ProductMutationResolver,
  ],
})
export class ResolversModule {}
