import React, {FC} from "react";
import {buildData} from "./Data";

export const CinemaExercise: FC = () => {
  let [q1, q2, q3, q4, q5, q6, q7, q8] = ['', '', '', '', '', '', '', ''];
  const data = buildData();

  q1 = data
    .map(m => m.title)
    .join(" ");


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
