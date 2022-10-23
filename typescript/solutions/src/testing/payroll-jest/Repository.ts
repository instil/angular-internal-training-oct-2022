import {Employee} from './Employee';

export interface Repository {
  add(employee: Employee): string;

  find(id: string): Employee;

  update(employee: Employee): void;
}
