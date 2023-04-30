import { Injectable } from '@nestjs/common';
import { Order } from 'src/common/interfaces/order';
import { CrudService } from './crud.service';
import mock from './mock/order';

@Injectable()
export class OrderService extends CrudService<Order> {
  constructor() {
    super(mock);
  }
}
