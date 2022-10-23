import React, {useEffect, useState} from "react";
import {buildData} from "./Data";
import _ from "lodash";

export const CinemaExercise = () => {
    const [q1, setQ1] = useState("");
    const [q2, setQ2] = useState("");
    const [q3, setQ3] = useState("");
    const [q4, setQ4] = useState("");
    const [q5, setQ5] = useState("");
    const [q6, setQ6] = useState("");
    const [q7, setQ7] = useState("");
    const [q8, setQ8] = useState("");

    useEffect(() => {
        const data = buildData();

        const r1 = data.map(m => m.title)
        setQ1(r1.join(" "));

        const r2 = data
            .filter(m => m.rating === "GREAT")
            .map(m => m.title)
        setQ2(r2.join(" "));

        const r3 = data
            .filter(m => m.releaseDate.getFullYear() === 1984)
            .map(m => [m.title, m.rating])
        setQ3(r3.join(" "));

        //const r4 = _.flatMap(data, m => m.quotes);
        const r4 = data.flatMap(m => m.quotes);
        setQ4(r4.join(" "));

        const quotes = data.flatMap(m => m.quotes);
        const totalLength = quotes.map(s => s.length)
            .reduce((a, b) => a + b);
        setQ5((totalLength / quotes.length).toFixed(2));

        const moviesByDecade = _.partition(data, m => m.releaseDate.getFullYear() < 1990);
        const r6 = moviesByDecade[0].map(m => m.title)
        setQ6(r6.join(" "));
        const r7 = moviesByDecade[1].map(m => m.title)
        setQ7(r7.join(" "));

        const moviesByRating = _.groupBy(data, m => m.rating);
        var r8 = "";
        for(let key in moviesByRating) {
            const values = moviesByRating[key].map(m => m.title);
            r8 += `${key}: ${values.join(" ")}\n`
        }
        setQ8(r8);

    }, []);

    // --- Ignore ---
    return (
        <div>
            <h3>Your Answers:</h3>
            <ol>
                <li>All the titles: <span>{q1}</span></li>
                <li>All the great movie titles: <span>{q2}</span></li>
                <li>Title and rating of movies from 1984: <span>{q3}</span></li>
                <li>All the quotes: <span>{q4}</span></li>
                <li>Average quote length: <span>{q5}</span></li>
                <li>Movies from the 1980s: <span>{q6}</span></li>
                <li>Movies from the 1990s: <span>{q7}</span></li>
                <li>Movies grouped by rating: <pre>{q8}</pre></li>
            </ol>
        </div>
    )
};
