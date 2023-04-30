import { Module } from '@nestjs/common';
import { ServicesModule } from 'src/services/services.module';
import { CategoryController } from './category/category.controller';
import { CurrencyController } from './currency/currency.controller';
import { ProductController } from './product/product.controller';

@Module({
  imports: [ServicesModule],
  controllers: [CurrencyController, CategoryController, ProductController],
})
export class ControllersModule {}
