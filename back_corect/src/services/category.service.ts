import { Injectable } from '@nestjs/common';
import { Category } from 'src/common/interfaces/category';
import { CrudService } from './crud.service';
import mock from './mock/category';

@Injectable()
export class CategoryService extends CrudService<Category> {
  constructor() {
    super(mock);
  }
}
