import React, {FC} from "react";
import {buildData} from "./Data";
import * as _ from "lodash";
import {Movie} from "./Movie";

function toTitle(movie: Movie) {
    return movie.title;
}

function isMovieInDecade(movie: Movie, decade: number): boolean {
    return movie.releaseDate.getFullYear() >= decade && movie.releaseDate.getFullYear() < decade + 10;
}

export const CinemaExercise: FC = () => {
    let [q1, q2, q3, q4, q5, q6, q7, q8] = ['', '', '', '', '', '', '', ''];

    const movies = buildData();

    q1 = movies.map(toTitle).join(" ");

    q2 = movies
        .filter(m => m.rating === "GREAT")
        .map(toTitle)
        .join(" ");

    q3 = movies
        .filter(m => m.releaseDate.getFullYear() === 1984)
        .map(m => `${m.title} - ${m.rating}`)
        .join(" ");

    const allQuotes = movies.flatMap(m => m.quotes);

    q4 = allQuotes.join(" ");

    q5 = _.meanBy(allQuotes, quote => quote.length).toFixed(2);

    q6 = movies
        .filter(movie => isMovieInDecade(movie, 1980))
        .map(toTitle)
        .join(", ");

    q7 = movies
        .filter(movie => isMovieInDecade(movie, 1990))
        .map(toTitle)
        .join(", ");

    const moviesByRating = _.groupBy(movies, m => m.rating);
    q8 = Object.entries(moviesByRating)
        .map(([rating, movies]) => `${rating}:\n\t${movies.map(toTitle).join("\n\t")}`)
        .join('\n');

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
