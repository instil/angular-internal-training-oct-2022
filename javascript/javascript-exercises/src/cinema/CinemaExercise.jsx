import React, {useEffect, useState} from "react";
import {buildData} from "./Data";

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
