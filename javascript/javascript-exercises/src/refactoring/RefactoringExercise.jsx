import React, {useEffect, useState} from "react";
import {Movie} from "./Movie";
import {Rental} from "./Rental";
import {Customer} from "./Customer";

export const RefactoringExercise = () => {
    const [output, setOutput] = useState("");

    useEffect(() => {
        // TODO: Refactor all the code in this directory
        let peterPan = new Movie('Peter Pan', 'CHILDRENS');
        let theHulk = new Movie('The Hulk', 'REGULAR');
        let starWars = new Movie('Star Wars', 'REGULAR');
        let toyStory = new Movie('Toy Story', 'CHILDRENS');
        let killBill = new Movie('Kill Bill', 'NEW_RELEASE');

        let r1 = new Rental(peterPan, 2);
        let r2 = new Rental(theHulk, 1);
        let r3 = new Rental(starWars, 3);
        let r4 = new Rental(toyStory, 2);
        let r5 = new Rental(killBill, 4);

        let customer = new Customer('Joe Bloggs');
        customer.addRental(r1);
        customer.addRental(r2);
        customer.addRental(r3);
        customer.addRental(r4);
        customer.addRental(r5);

        setOutput(customer.statement());
    }, []);

    // --- Ignore ---
    return (
        <div>
            <h2>Output</h2>
            <pre>{output}</pre>
        </div>
    )
};
