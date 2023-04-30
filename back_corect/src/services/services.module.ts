import { Module } from '@nestjs/common';
import { CategoryService } from './category.service';
import { CurrencyService } from './currency.service';
import { ProductService } from './product.service';
import { OrderService } from './order.service';

const exportModules = [
  CurrencyService,
  CategoryService,
  ProductService,
  OrderService,
];
@Module({
  exports: [...exportModules],
  providers: [...exportModules],
})
export class ServicesModule {}
