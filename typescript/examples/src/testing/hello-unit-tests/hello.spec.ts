import {hello} from "./hello";

describe("Simple Example", () => {
    it("returns hello", () => {
        expect(hello()).toEqual("Hello Jasmine!");
    });
});


