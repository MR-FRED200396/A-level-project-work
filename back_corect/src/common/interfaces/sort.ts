import { Direction } from '../enums/direction';

export type Sort<T> = {
  [key in keyof T]?: Direction;
};
