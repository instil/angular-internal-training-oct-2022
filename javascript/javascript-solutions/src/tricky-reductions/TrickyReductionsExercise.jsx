import React, {useEffect, useState} from "react";

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export const TrickyReductionsExercise = () => {
    const [output1, setOutput1] = useState(0);
    const [output2, setOutput2] = useState(0);
    const [output3, setOutput3] = useState(0);
    const [output4a, setOutput4a] = useState(0);
    const [output4b, setOutput4b] = useState(0);
    const [output5, setOutput5] = useState(0);
    const [output6, setOutput6] = useState(0);
    const [output7, setOutput7] = useState("0");

    useEffect(() => {
        const sumResult = input.reduce((a, b) => a + b);
        setOutput1(sumResult);

        const productResult = input.reduce((a, b) => a * b);
        setOutput2(productResult);

        const countResult = input.reduce((a, b) => a + 1, 0);
        setOutput3(countResult);

        const averageResultA = input.reduce((state, num) =>{
            const count = state[0] + 1;
            const sum = state[1] + num;
            return [count, sum];
        }, [0,0]);
        setOutput4a(averageResultA[1] / averageResultA[0]);

        const [finalCount, finalSum] = input.reduce(([oldCount, oldSum], num) => {
            const count = oldCount + 1;
            const sum = oldSum + num;
            return [count, sum];
        }, [0,0]);
        setOutput4b(finalSum / finalCount);

        const lastResult = input.reduce((a, b) => b);
        setOutput5(lastResult);

        const penultimateResult = input.reduce((lastTwo, num) => [num, lastTwo[0]], [0,0]);
        setOutput6(penultimateResult[1]);

        const reverseResult = input.reduce((newArray, num) => {
            newArray.unshift(num);
            return newArray;
        }, [])
        setOutput7(reverseResult.join(" "));
    },[]);

    // --- Ignore ---
    return (
        <div>
            <h2>Output</h2>
            <ol>
                <li>Summing via reduce gives {output1}</li>
                <li>Multiplying via reduce gives {output2}</li>
                <li>Counting via reduce gives {output3}</li>
                <li>Average via reduce gives {output4a}</li>
                <li>Average (improved) via reduce gives {output4b}</li>
                <li>Last via reduce gives {output5}</li>
                <li>Penultimate via reduce gives {output6}</li>
                <li>Reverse via reduce gives {output7}</li>
            </ol>
        </div>
    )
};
