function showRegularMethods() {
    class Employee {
        constructor(public fullName: string, public yearlySalary: number) {
        }

        calcSalary(): number {
            return this.yearlySalary / 12;
        }

        toString(): string {
            return `${this.fullName} earning ${this.calcSalary()} per month`;
        }
    }

    console.log("\nVersion 1 of the Employee class:");

    const emp = new Employee("Dave", 36000.0);
    console.log(emp.toString());

    const f = emp.calcSalary;
    try {
        console.log(f());
    } catch (e) {
        console.log("Could not use 'f'");
    }
}

function showArrowsAsMethods() {
    class Employee {
        calcSalary: () => number;

        constructor(public fullName: string, public yearlySalary: number) {
            this.calcSalary = () => this.yearlySalary / 12;
        }

        toString(): string {
            return `${this.fullName} earning ${this.calcSalary()} per month`;
        }
    }

    console.log("\nVersion 2 of the Employee class:");

    const emp = new Employee("Jane", 36000.0);
    console.log(emp.toString());

    const f = emp.calcSalary;
    try {
        console.log(f());
    } catch (e) {
        console.log("Could not use 'f'");
    }
}

function showBindInMethods() {
    class Employee {
        constructor(public fullName: string, public yearlySalary: number) {
            this.calcSalary = this.calcSalary.bind(this);
        }

        calcSalary(): number {
            return this.yearlySalary / 12;
        }

        toString(): string {
            return `${this.fullName} earning ${this.calcSalary()} per month`;
        }
    }

    console.log("\nVersion 3 of the Employee class:");

    const emp = new Employee("Pete", 36000.0);
    console.log(emp.toString());

    const f = emp.calcSalary;
    try {
        console.log(f());
    } catch (e) {
        console.log("Could not use 'f'");
    }
}

export function showIssuesWithMethods() {
    showRegularMethods();
    showArrowsAsMethods();
    showBindInMethods();
}
