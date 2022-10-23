interface Person {
  name: string;
}

interface Employee extends Person {
  dept: string;
}

interface Manager extends Employee {
  budget: number;
}

declare let person: Person;
declare let employee: Employee;
const people: Person[] = [];
const managers: Manager[] = [];
const employees: Employee[] = [];

// Person < Employee < Manager
person = employee; // Makes sense in this direction
// employee = person; // Doesn't make sense in this direction

// Does this code make sense if I pass in both Employee[] or Manager[]?
export function demo(employees: Employee[]) {
  employees[0].name;
  employees.push(employee);
}

// *** Try to reason it without implementing the code!!! ***
// Do any of these make sense?
// demo(people);
// demo(employees);
// demo(managers);


type Writer<T> = (_: T) => void;
type Reader<T> = () => T;

declare let a: Reader<Person>;
declare let b: Reader<Employee>;

// Do both of these make sense?
// a = b;
// b = a;

declare let c: Writer<Person>;
declare let d: Writer<Employee>;

// Do both of these make sense?
// Try toggling "strictFunctionTypes" in the tsconfig.json
// c = d;
// d = c;
