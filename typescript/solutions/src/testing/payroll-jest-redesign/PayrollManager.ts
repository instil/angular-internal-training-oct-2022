import {Employee} from './Employee';
import {Repository} from './Repository';

export class PayrollManager {
    constructor(private repository: Repository) {
    }

    enroll(name: string, age: number, dept: string, salary: number): void {
        this.repository.add(new Employee(name, age, dept, salary));
    }

    runPayrollForCompany(): number {
        return this.repository.getAll()
            .map(toMonthlySalary)
            .reduce(sum);
    }

    runPayrollForDept(dept: string): number {
        return this.repository.getAll()
            .filter(x => x.dept === dept)
            .map(toMonthlySalary)
            .reduce(sum);
    }

    adjustSalaryByDept(dept: string, addition: number): void {
        this.repository.getAll()
            .filter(x => x.dept === dept)
            .forEach(employee => {
                employee.salary += addition;
                this.repository.update(employee);
            });
    }
}

function toMonthlySalary(employee: Employee) {
    return employee.salary / 12;
}

function sum(total: number, value: number): number {
    return total + value;
}
