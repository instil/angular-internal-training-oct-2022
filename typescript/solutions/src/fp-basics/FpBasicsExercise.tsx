import React, {FC} from "react";
import _ from "lodash"

export const FpBasicsExercise: FC = () => {
  const numbers: number[] = [];

  _.times(100, () => numbers.push(Math.random() * 100));
  const numbersOverFifty = numbers.filter(x => x > 50);
  const formattedNumbers = numbersOverFifty.map(num => `${num.toFixed(2)}\n`);
  const output = formattedNumbers.reduce((a, b) => `${a}${b}`);

  // --- Ignore ---
  return (
    <div>
      <h2>Output</h2>
      <pre>{output}</pre>
    </div>
  )
};
