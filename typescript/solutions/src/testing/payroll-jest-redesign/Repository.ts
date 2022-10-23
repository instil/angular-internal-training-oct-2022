import {Employee} from './Employee';

export interface Repository {
  add(employee: Employee): void;

  getAll(): Employee[];

  update(employee: Employee): void;
}
