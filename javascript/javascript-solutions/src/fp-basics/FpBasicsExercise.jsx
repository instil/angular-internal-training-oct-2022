import React, {useEffect, useState} from "react";
import _ from "lodash"
import * as R from "ramda"

function numbersViaLodash() {
    const numbers = [];

    _.times(100, () => numbers.push(Math.random() * 100));
    const numbersOverFifty = numbers.filter(x => x > 50);
    const formattedNumbers = numbersOverFifty.map(num => `${num.toFixed(2)}, `);

    return formattedNumbers.reduce((a, b) => `${a}${b}`);
}

function numbersViaRamda() {
    const buildNumbers = () => R.times(() => Math.random() * 100, 100);
    const filterNumbers = data => data.filter(x => x > 50);
    const formatNumbers = data => data.map(num => `${num.toFixed(2)}, `);
    const joinNumbers = data => data.reduce((a, b) => `${a}${b}`);

    const solution = R.compose(joinNumbers, formatNumbers, filterNumbers, buildNumbers);
    return solution();
}

export const FpBasicsExercise = () => {
    const [lodashOutput, setLodashOutput] = useState("");
    const [ramdaOutput, setRamdaOutput] = useState("");

    useEffect(() => {
        setLodashOutput(numbersViaLodash());
        setRamdaOutput(numbersViaRamda());
    }, []);

    // --- Ignore ---
    return (
        <div>
            <h2>Output via Lodash</h2>
            <div>{lodashOutput}</div>
            <hr/>
            <h2>Output via Ramda</h2>
            <div>{ramdaOutput}</div>
        </div>
    )
};
