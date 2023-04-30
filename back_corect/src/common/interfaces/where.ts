export type Where<T> = {
  [key in keyof T]?: T[key];
};
