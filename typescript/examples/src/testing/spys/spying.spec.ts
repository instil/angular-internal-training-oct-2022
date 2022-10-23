import {MathType} from "../basic-unit-tests/math-type";

describe("Spying on functions", () => {
  it("spying on methods with call through", () => {
    const target = new MathType(34, 12);
    spyOn(target, 'add').and.callThrough();
    spyOn(target, 'subtract').and.callThrough();
    spyOn(target, 'multiply');

    const result1 = target.add();
    const result2 = target.subtract();

    expect(result1).toEqual(46);
    expect(result2).toEqual(22);
    expect(target.add).toHaveBeenCalled();
    expect(target.subtract).toHaveBeenCalled();
    expect(target.multiply).not.toHaveBeenCalled();
  });

  it("spying on methods altering return values", () => {
    const target = new MathType(34, 12);
    spyOn(target, 'add').and.returnValue(123);
    spyOn(target, 'subtract').and.returnValue(456);
    spyOn(target, 'multiply');

    const result1 = target.add();
    const result2 = target.subtract();

    expect(result1).toEqual(123);
    expect(result2).toEqual(456);
    expect(target.add).toHaveBeenCalled();
    expect(target.subtract).toHaveBeenCalled();
    expect(target.multiply).not.toHaveBeenCalled();
  });

  it("checking inputs", () => {
    const target = new MathType(34, 12);
    spyOn(target, 'join').and.callThrough();

    const result = target.join('-');

    expect(result).toBe('34-12');
    expect(target.join).toHaveBeenCalledWith('-');
    expect(target.join).not.toHaveBeenCalledWith('#');
  });

  it("replacing a methods implementation", () => {
    const target = new MathType(34, 12);
    let addRetval = 5;
    let subtractRetval = 7;

    spyOn(target, 'add').and.callFake(() => addRetval++);
    spyOn(target, 'subtract').and.callFake(() => subtractRetval--);

    expect(target.add()).toBe(5);
    expect(target.add()).toBe(6);
    expect(target.add()).toBe(7);

    expect(target.subtract()).toBe(7);
    expect(target.subtract()).toBe(6);
    expect(target.subtract()).toBe(5);
  });

  it('counting calls', () => {
    const spy = jasmine.createSpy<(input: number) => boolean>();

    spy(12);
    spy(34);
    spy(56);

    expect(spy.calls.count()).toEqual(3);
    expect(spy.calls.any()).toBeTrue();
    expect(spy.calls.mostRecent().args).toEqual([56]);
    expect(spy.calls.all().map(info => info.args)).toEqual([[12], [34], [56]]);
  });

  it('reseting spys', () => {
    const spy = jasmine.createSpy<(input: number) => boolean>();

    spy(12);
    spy(34);
    spy(56);

    spy.calls.reset();

    spy(78);
    spy(90);

    expect(spy.calls.count()).toEqual(2);
    expect(spy.calls.all().map(info => info.args)).toEqual([[78], [90]]);
  });

  it('fake clocks', () => {
    let complete = false;
    jasmine.clock().install();

    setTimeout(() => complete = true, 200000);

    expect(complete).toBeFalse();
    jasmine.clock().tick(2000000);
    expect(complete).toBeTrue();

    jasmine.clock().mockDate(new Date(1, 2, 3));
    expect(new Date()).toEqual(new Date(1, 2, 3));
  });
});


