import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { Sort } from '../common/interfaces/sort';
import { Where } from '../common/interfaces/where';
import { Direction } from '../common/enums/direction';
import { List } from 'src/common/interfaces/list';
import { Pagination } from 'src/common/interfaces/pagination';

type ObjectWithId = {
  id: number;
};
@Injectable()
export class CrudService<T extends ObjectWithId> {
  data: T[];

  constructor(data: T[]) {
    this.data = [...data];
  }

  async findOne(id: number): Promise<T> {
    const index = this.findIndex(id);

    if (index < 0)
      throw new UnprocessableEntityException(`Entity with ${id} not found`);

    return this.data[index];
  }

  async findAll(
    where?: Where<T>,
    sort?: Sort<T>,
    pagination?: Pagination,
  ): Promise<List<T>> {
    let paginatedData = this.data;
    if (pagination) {
      const indexSkip = pagination.skip - 1;
      const indexTake = pagination.skip + pagination.take - 1;
      paginatedData = this.data.filter((el, index) => {
        return index > indexSkip && index <= indexTake;
      });
    }
    const filteredData = this.filter(paginatedData, where);
    const sortedData = this.sort(filteredData, sort);

    return new Promise((resolve) =>
      setTimeout(() => {
        resolve({ items: sortedData, totalCount: this.data.length });
      }, 1000),
    );
  }

  async create(entity: T) {
    this.data = [...this.data, entity];
    return entity;
  }

  async delete(id: number) {
    const arr = [...this.data];

    const index = this.findIndex(id);
    if (index < 0)
      throw new UnprocessableEntityException(`Entity with ${id} not found`);

    arr.splice(index, 1);
    this.data = arr;
    return true;
  }

  async update(el: T) {
    const index = this.findIndex(el.id);
    if (index < 0)
      throw new UnprocessableEntityException(`Entity with ${el.id} not found`);

    const arr = [...this.data];
    arr[index] = el;
    this.data = arr;

    return el;
  }

  async partialUpdate(el: Partial<T> & { id: number }) {
    const index = this.findIndex(el.id);
    if (index < 0)
      throw new UnprocessableEntityException(`Entity with ${el.id} not found`);

    const arr = [...this.data];
    arr[index] = { ...arr[index], ...el };
    this.data = arr;

    return arr[index];
  }

  private findIndex(id: number) {
    return this.data.findIndex((el) => {
      return el.id === id;
    });
  }

  private filter(data: T[], where?: Where<T>) {
    if (!where) return data;
    return data.filter((el) => {
      let result = true;
      let key: keyof T;
      for (key in where) {
        if (Object.prototype.hasOwnProperty.call(where, key)) {
          const v = where[key];
          result = result && el[key] === v;
        }
      }
      return result;
    });
  }

  private sort(data: T[], sort?: Sort<T>) {
    if (!sort) return data;
    const keys = Object.keys(sort);
    if (keys.length === 0) return data;

    return [...data].sort((a, b) => {
      const keys = Object.keys(sort);
      const field = keys[0] as keyof Sort<T>;
      const direction = sort[field];
      const directionIndex = direction === Direction.ASC ? 1 : -1;
      if (a[field] > b[field]) return 1 * directionIndex;
      if (a[field] < b[field]) return -1 * directionIndex;
      return 0;
    });
  }
}
