import {PayrollManager} from './PayrollManager';
import {Repository} from './Repository';
import {Employee} from "./Employee";

function mockOf<T>(...methods: (keyof T)[]): jest.Mocked<T> {
  return Object.fromEntries(
    methods.map(method => [method, jest.fn()])
  ) as unknown as jest.Mocked<T>;
}

describe('Payroll Manager Tests', () => {
  let target: PayrollManager;
  let repository: jest.Mocked<Repository>;

  beforeEach(() => {
    repository = mockOf<Repository>('add', 'find', 'update');

    target = new PayrollManager(repository);
  });
});
