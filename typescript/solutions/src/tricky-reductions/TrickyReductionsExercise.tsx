import React from "react";

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const TrickyReductionsExercise = () => {
  const sumResult = input.reduce((a, b) => a + b);
  const productResult = input.reduce((a, b) => a * b);
  const countResult = input.reduce((a, b) => a + 1, 0);

  const averageWithCount = input.reduce((state, num) => {
    const count = state[0] + 1;
    const sum = state[1] + num;
    return [count, sum];
  }, [0, 0]);
  const averageResult = averageWithCount[1] / averageWithCount[0];

  const lastItemResult = input.reduce((a, b) => b);

  const penultimateItemResult = (input.reduce((lastTwo, num) => [num, lastTwo[0]], [0, 0]))[1];

  const reverseResult = input
    .reduce((newArray, num) => {
        newArray.unshift(num);
        return newArray;
      }, [] as number[]
    )
    .join(" ");

  // --- Ignore ---
  return (
    <div>
      <h2>Output</h2>
      <ol>
        <li>Summing via reduce gives {sumResult}</li>
        <li>Multiplying via reduce gives {productResult}</li>
        <li>Counting via reduce gives {countResult}</li>
        <li>Average via reduce gives {averageResult}</li>
        <li>Last via reduce gives {lastItemResult}</li>
        <li>Penultimate via reduce gives {penultimateItemResult}</li>
        <li>Reverse via reduce gives {reverseResult}</li>
      </ol>
    </div>
  )
};
