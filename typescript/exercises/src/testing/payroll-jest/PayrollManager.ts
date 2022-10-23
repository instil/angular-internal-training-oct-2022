import {Employee} from './Employee';
import {Repository} from './Repository';

export class PayrollManager {
  employeeIds: string[] = [];

  constructor(private repository: Repository) {
  }

  enroll(name: string, age: number, dept: string, salary: number): string {
    const id = this.repository.add(new Employee(name, age, dept, salary));
    this.employeeIds.push(id);
    return id;
  }

  runPayrollForCompany() {
    return this.employeeIds
      .map(x => this.repository.find(x))
      .map(x => x.salary / 12)
      .reduce((total, value) => total + value);
  }

  runPayrollForDept(dept: string): number {
    return this.employeeIds
      .map(x => this.repository.find(x))
      .filter(x => x.dept === dept)
      .map(x => x.salary / 12)
      .reduce((total, value) => total + value);
  }

  adjustSalaryByDept(dept: string, addition: number): void {
    this.employeeIds
      .map(x => this.repository.find(x))
      .filter(x => x.dept === dept)
      .forEach(employee => {
        employee.salary = employee.salary + addition;
        this.repository.update(employee);
      });
  }
}

