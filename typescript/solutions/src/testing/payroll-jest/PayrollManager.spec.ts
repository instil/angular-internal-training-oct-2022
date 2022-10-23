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
    let stubEmployees: Employee[];

    function mockReturnValues<T, Y extends any[]>(func: jest.MockInstance<T, Y>, values: T[]): void {
        values.forEach(value => func.mockReturnValueOnce(value));
    }

    function enrollFourEmployees() {
        stubEmployees.forEach(x => target.enroll(x.name, x.age, x.dept, x.salary));
    }

    function stubFourEnrolledEmployees() {
        const ids = ['AA', 'BB', 'CC', 'DD'];
        mockReturnValues(repository.add, ids);
        mockReturnValues(repository.find, stubEmployees);
        enrollFourEmployees();
    }

    beforeEach(() => {
        stubEmployees = [
            new Employee('Dave', 27, 'HR', 24000.0),
            new Employee('Jane', 29, 'IT', 36000.0),
            new Employee('Pete', 31, 'HR', 48000.0),
            new Employee('Mary', 33, 'IT', 60000.0),
        ];
        repository = mockOf<Repository>('add', 'find', 'update');

        target = new PayrollManager(repository);
    });

    it('should enroll employee by adding', () => {
        repository.add.mockReturnValue('AB12');
        const expectedAddedEmployee = new Employee('Dave', 27, 'HR', 24000.0);

        const id = target.enroll('Dave', 27, 'HR', 24000.0);

        expect(id).toEqual('AB12');
        expect(repository.add).toHaveBeenCalledWith(expectedAddedEmployee);
    });

    it('should enroll multiple employee by adding', () => {
        enrollFourEmployees();

        expect(repository.add).toHaveBeenCalledTimes(4);
    });

    it('should calculate payroll', () => {
        stubFourEnrolledEmployees();

        const retval = target.runPayrollForCompany();

        expect(repository.find).toHaveBeenCalledTimes(4);
        expect(retval).toEqual(14000.0);
    });

    it('should calculate payroll for department', () => {
        stubFourEnrolledEmployees();

        const retval = target.runPayrollForDept('IT');

        expect(retval).toEqual(8000.0);
    });

    it('should increment salaries by dept', () => {
        stubFourEnrolledEmployees();

        target.adjustSalaryByDept('HR', 1200);

        expect(repository.update).toHaveBeenCalledTimes(2);
        expect(repository.update).toHaveBeenCalledWith(new Employee('Dave', 27, 'HR', 25200.0))
        expect(repository.update).toHaveBeenCalledWith(new Employee('Pete', 31, 'HR', 49200.0))
    });
});
