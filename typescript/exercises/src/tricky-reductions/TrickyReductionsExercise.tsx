import React, {FC} from "react";

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const TrickyReductionsExercise: FC = () => {
  const sumResult = 1;
  const productResult = 1;
  const countResult = 1;
  const averageResult = 1;
  const lastItemResult = 1;
  const penultimateItemResult = 1;
  const reverseResult = "1";

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
