class Employee {
    public name: string;
    protected dept: string;

    constructor(name: string, dept: string) {
        this.name = name;
        this.dept = dept;
    }

    calcSalary(): void {
        console.log(`Calculating salary for ${this.name} in ${this.dept}`);
    }

    takeHoliday(): void {
        console.log(this.name, "is taking a holiday");
    }

    toString(): string {
        return `${this.name} working in ${this.dept}`;
    }
}

class Manager extends Employee {
    private budget: number;

    constructor(name: string, dept: string, budget: number) {
        super(name, dept);
        this.budget = budget;
    }

    promote(employee: Employee): void {
        console.log(this.name, "is promoting", employee.name);
    }

    downsize(employee: Employee): void {
        console.log(this.name, "is downsizing", employee.name);
    }

    toString(): string {
        return `${this.name} working in ${this.dept} with budget of ${this.budget}`;
    }
}

export function showBasicClasses() {
    const dave = new Employee("Dave", "IT");
    console.log(String(dave));
    dave.calcSalary();
    dave.takeHoliday();

    const jane = new Manager("Jane", "HR", 300000);
    console.log(String(jane));
    jane.calcSalary();
    jane.takeHoliday();
    jane.promote(dave);
    jane.downsize(dave);
}
