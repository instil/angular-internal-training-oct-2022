interface Data {
    field1: number[];
    readonly field2: number[];
    field3: readonly number[];
    // field3b: readonly Array<number>; // Note that this form is not supported

    readonly field4: readonly number[];

    field5: [number, number, number];
    readonly field6: [number, number, number];
    field7: readonly [number, number, number];
    readonly field8: readonly [number, number, number];
}

export function showReadonlyTypes() {
    const array = [1, 2, 3];
    const tuple: [number, number, number] = [1, 2, 3];

    const data: Data = {
        field1: array,
        field2: array,
        field3: array,
        field4: array,
        field5: tuple,
        field6: tuple,
        field7: tuple,
        field8: tuple,
    };

    // Field 1 is an array that can be replaced or mutated
    data.field1[2] = 2;
    data.field1 = [4, 5,6];

    // Field 2 is an array that cannot be replaced, but can be mutated
    data.field2[2] = 2;
    // data.field2 = [4, 5,6]; // Illegal

    // Field 3 is an array that can be replaced, but cannot be mutated
    // data.field3[2] = 2; // Illegal
    data.field3 = [4, 5,6]; // Legal
    // data.field3[2] = 3; // Still Illegal

    // Field 4 is an array that cannot be replaced or mutated
    // data.field4[2] = 2; // Illegal
    // data.field4 = [4, 5,6]; // Illegal


    // Field 5 is a tuple that can be replaced or mutated
    data.field5[2] = 2;
    data.field5 = [4, 5,6];

    // Field 6 is a tuple that cannot be replaced, but can be mutated
    data.field6[2] = 2;
    // data.field6 = [4, 5,6]; // Illegal

    // Field 7 is a tuple that can be replaced, but cannot be mutated
    // data.field7[2] = 2; // Illegal
    data.field7 = [4, 5,6]; // Illegal
    // data.field7[2] = 3; // Still Illegal

    // Field 8 is a tuple that cannot be replaced or mutated
    // data.field8[2] = 2; // Illegal
    // data.field8 = [4, 5,6]; // Illegal
}
