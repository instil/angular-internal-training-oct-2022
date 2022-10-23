export {};

// --------------------------------------------------
interface Employee {
    name: string;
    age: number,
    employeeNumber: string,
    salary: number;
}

const dummyEmployee: Employee = {
    name: 'sam',
    age: 30,
    employeeNumber: 'ENI0123',
    salary: 50000,
};

// --------------------------------------------------
// All fields are made readonly
type ReadonlyEmployee = Readonly<Employee>

const e1: ReadonlyEmployee = dummyEmployee;

// Invalid as all fields are readonly
// e1.name = 'jane';


// --------------------------------------------------
// All fields are made optional
type PartialEmployee = Partial<Employee>

function copyWith(source: ReadonlyEmployee, update: PartialEmployee): ReadonlyEmployee {
    return {
        ...source,
        ...update
    };
}

const dummyEmployee2 = copyWith(dummyEmployee, {name: 'stevie', salary: 55000});

// The opposite of Partial is Required
type Employee2 = Required<PartialEmployee>


// --------------------------------------------------
type ManagementRole = 'ceo' | 'cto' | 'cfo' | 'cio';

// Constructs a new type with fields of a certain type
type Management = Record<ManagementRole, ReadonlyEmployee>

const m: Management = {
    ceo: dummyEmployee,
    cto: dummyEmployee2,
    cfo: dummyEmployee,
    cio: dummyEmployee2
};


// --------------------------------------------------
// Constructs a new type by selecting a subset of fields
type Person1 = Pick<Employee, 'name' | 'age'>

// Constructs a new type by omitting a subset of fields
type Person2 = Omit<Employee, 'employeeNumber' | 'salary'>

const person1: Person1 = {
    name: 'alex',
    age: 40
};

const person2: Person2 = {
    name: 'charlie',
    age: 60
};


// --------------------------------------------------
// These are similar to Pick and Extract above but the types
//   being excluded or extracted must be a subset of the members
//   of T

// Constructs a algebraic type by exluding types
type TechRole1 = Exclude<ManagementRole, 'ceo' | 'cfo'>

// Constructs a algebraic type by extracting types - a bit like an intersection
type TechRole2 = Extract<ManagementRole, 'cto' | 'cio' | 'someRandom' | number>

const role1: TechRole1 = "cio";
const role2: TechRole2 = "cto";


// --------------------------------------------------
// Extract the ReturnType from a function type
type DOMElement = ReturnType<typeof document.getElementById>

// This type is 'HTMLElement | null'
const element1: DOMElement = null;

// Remove null and undefined as valid options from a type
// Note this is equivalent to Exclude<T, null | undefined>
type NonNullableDOMElement = NonNullable<DOMElement>;

// Invalid as null and undefined removed from type
// const element2: NonNullableDOMElement = null;
