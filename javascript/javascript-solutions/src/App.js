import './App.css';
import {FpBasicsExercise} from "./fp-basics/FpBasicsExercise";
import {PalindromesExercise} from "./palindromes/PalindromesExercise";
import {RomanNumeralsEasyExercise} from "./roman-numerals-easy/RomanNumeralsEasyExercise";
import {RomanNumeralsHardExercise} from "./roman-numerals-hard/RomanNumeralsHardExercise";
import {UniqueWordsExercise} from "./unique-words/UniqueWordsExercise";
import {DiamondsExercise} from "./diamonds/DiamondsExercise";
import {NumberConverterExercise} from "./number-converter/NumberConverterExercise";
import {TrickyReductionsExercise} from "./tricky-reductions/TrickyReductionsExercise";
import {RefactoringExercise} from "./refactoring/RefactoringExercise";
import {CinemaExercise} from "./cinema/CinemaExercise";
import {AsyncAwaitExercise} from "./async-await/AsyncAwaitExercise";
import {RxExercise} from "./rx/AsyncAwaitExercise";
import {PokerHandsExercise} from "./poker/PokerHandsExercise";
import {Link} from "react-router-dom";
import {Route, Routes} from "react-router";
import {PokerHandsPatternsExercise} from "./poker-patterns/PokerHandsPatternsExercise";

export const solutions = [
    {path: '/diamonds', component: DiamondsExercise, title: "Diamonds"},
    {path: '/palindromes', component: PalindromesExercise, title: "Palindromes"},
    {path: '/roman-numerals-easy', component: RomanNumeralsEasyExercise, title: "Roman Numerals Easy"},
    {path: '/roman-numerals-hard', component: RomanNumeralsHardExercise, title: "Roman Numerals Hard"},
    {path: '/refactoring', component: RefactoringExercise, title: "Refactoring"},
    {path: '/fp-basics', component: FpBasicsExercise, title: "FP Basics"},
    {path: '/cinema', component: CinemaExercise, title: "Cinema"},
    {path: '/tricky-reductions', component: TrickyReductionsExercise, title: "Tricky Reductions"},
    {path: '/number-converter', component: NumberConverterExercise, title: "Number Converter"},
    {path: '/unique-words', component: UniqueWordsExercise, title: "Unique Words"},
    {path: '/poker', component: PokerHandsExercise, title: "Poker Hands"},
    {path: '/poker-patterns', component: PokerHandsPatternsExercise, title: "Poker Hands Patterns"},
    {path: '/async-await', component: AsyncAwaitExercise, title: "Async Await"},
    {path: '/rx', component: RxExercise, title: "RX"}
];

function App() {
    return (
        <div className="container">
            <div className="row">
                <aside className="col-sm-4 bg-light">
                    <ol>
                        {solutions.map(x =>
                            (<li key={x.path}><Link to={x.path}>{x.title}</Link></li>))}
                    </ol>
                </aside>
                <div className="col-sm-8">
                    <div id="output-region" className="sticky-top">
                        <Routes>
                            {solutions.map(x =>
                                (<Route key={x.path} path={x.path} element={x.component()}/>))}
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
