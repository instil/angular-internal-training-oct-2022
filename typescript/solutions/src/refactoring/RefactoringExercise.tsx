import React, {FC} from "react";
import {Movie} from "./Movie";
import {Rental} from "./Rental";
import {Customer} from "./Customer";
import {PriceCode} from "./PriceCode";

export const RefactoringExercise: FC = () => {
  const peterPan = new Movie('Peter Pan', PriceCode.Childrens);
  const theHulk = new Movie('The Hulk', PriceCode.Regular);
  const starWars = new Movie('Star Wars', PriceCode.Regular);
  const toyStory = new Movie('Toy Story', PriceCode.Childrens);
  const killBill = new Movie('Kill Bill', PriceCode.NewRelease);

  const customer = new Customer('Joe Bloggs');
  customer.addRentals(
    new Rental(peterPan, 2),
    new Rental(theHulk, 1),
    new Rental(starWars, 3),
    new Rental(toyStory, 2),
    new Rental(killBill, 4)
  );

  const output = customer.statement();

  // --- Ignore ---
  return (
    <div>
      <h2>Output</h2>
      <pre>{output}</pre>
    </div>
  )
};
