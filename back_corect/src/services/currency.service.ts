import { Injectable } from '@nestjs/common';
import { Currency } from '../common/interfaces/currency';
import { CrudService } from './crud.service';
import mock from './mock/currency';

@Injectable()
export class CurrencyService extends CrudService<Currency> {
  constructor() {
    super(mock);
  }
}
