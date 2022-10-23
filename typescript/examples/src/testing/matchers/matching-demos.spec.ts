
describe("Demos of matchers", () => {
    it("determining truth", () => {
        expect(123).toBeTruthy();
        expect("abc").toBeTruthy();
        expect({}).toBeTruthy();

        expect(null).toBeFalsy();
        expect(undefined).toBeFalsy();
        expect(NaN).toBeFalsy();

        expect(true).toBeTrue();
        expect(false).toBeFalse();
    });

    it("performing equality checks", () => {
        const str1 = "123";
        const str2 = 'abc';
        const obj1 = {p1: "abc", p2: 123, p3: true};
        const obj2 = {p1: "abc", p2: 123, p3: true};

        expect(str1).not.toEqual(str2);
        expect(str1).not.toBe(str2);

        expect(obj1).toEqual(obj2);
        expect(obj1).not.toBe(obj2);
    });

    it("using regular expressions", () => {
        const input = "ABC123";

        expect(input).toMatch(/[A-Z]{3}[0-9]{3}/);
        expect(input).toMatch("[A-Z]{3}[0-9]{3}");
        expect(input).toMatch(/[A-Z]{2}[0-9]{2}/);
        expect(input).not.toMatch(/[A-Z]{4}[0-9]{3}/);
    });

    it("checking objects", () => {
        const myvar1 = "abc";
        let myvar2;
        const myvar3 = {p1: "abc", p2: 123};
        const myvar4 = null;
        const myvar5 = new Date();

        expect(myvar1).toBeDefined();
        expect(myvar2).not.toBeDefined();
        expect(myvar3).toBeDefined();

        expect(myvar1).not.toBeUndefined();
        expect(myvar2).toBeUndefined();
        expect(myvar3).not.toBeUndefined();

        expect(myvar4).toBeNull();
        expect(myvar3).not.toBeNull();

        expect(myvar5).toBeInstanceOf(Date);
    });

    it("performing comparisons", () => {
        const myarray = ["ab", "cd", "ef"];
        const num1 = 24;
        const num2 = 118;
        const num3 = 12.34;
        const num4 = 12.35;

        expect(myarray).toContain("cd");
        expect(myarray).not.toContain("gh");

        expect(num2).toBeGreaterThan(num1);
        expect(num1).toBeLessThan(num2);

        expect(num3).toBeCloseTo(num4, 1);
        expect(num3).not.toBeCloseTo(num4, 2);

        expect(NaN).toBeNaN();
        expect(1 / 0).toBePositiveInfinity();
        expect(-1 / 0).toBeNegativeInfinity();
    });

    it('checking collections', () => {
      const myvar1 = [1, 2, 3, 4];

      expect(myvar1).toContain(3);
      expect(myvar1).toHaveSize(4);
    });

    it("checking exceptions", () => {
        let myvar;

        function tmp(): void {
            if (myvar > 12) {
                throw new Error("Bang!");
            }
        }

        myvar = 10;
        expect(tmp).not.toThrow();

        myvar = 14;
        expect(tmp).toThrow();
        expect(tmp).toThrowError('Bang!');
        expect(tmp).toThrowMatching(error => error.message === 'Bang!');
    });
});
