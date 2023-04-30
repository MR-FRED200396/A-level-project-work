import { Injectable } from '@nestjs/common';
import { Product } from 'src/common/interfaces/product';
import { CrudService } from './crud.service';
import mock from './mock/product';

@Injectable()
export class ProductService extends CrudService<Product> {
  constructor() {
    super(mock);
  }
}
