import {FpBasicsExercise} from "./fp-basics/FpBasicsExercise";
import {RomanNumeralsEasyExercise} from "./roman-numerals-easy/RomanNumeralsEasyExercise";
import {RomanNumeralsHardExercise} from "./roman-numerals-hard/RomanNumeralsHardExercise";
import {AsyncAwaitPromisesExercise} from "./async-await-promises/AsyncAwaitPromisesExercise";
import {RxExercise} from "./rx/RxExercise";
import {CinemaExercise} from "./cinema/CinemaExercise";
import {PalindromesExercise} from "./palindromes/PalindromesExercise";
import {UniqueWordsExercise} from "./unique-words/UniqueWordsExercise";
import {DiamondsExercise} from "./diamonds/DiamondsExercise";
import {NumberConverterExercise} from "./number-converter/NumberConverterExercise";
import {TrickyReductionsExercise} from "./tricky-reductions/TrickyReductionsExercise";
import {RefactoringExercise} from "./refactoring/RefactoringExercise";
import {PokerHandsExercise} from "./poker/PokerHandsExercise";
import {LazyFpExercise} from "./lazy-fp/LazyFpExercise";
import {MappedTypeDateExercise} from "./mapped-types-date/MappedTypesDateExercise";
import {AddingTypesExercise} from "./adding-types/AddingTypesExercise";
import {HangmanRefactoringExercise} from "./refactoring-hangman/HangmanRefactoringExercise";
import {DiscriminatedUnionExercise} from "./discriminated-union/DiscriminatedUnionExercise";
import {MappedTypesFlattenExercise} from "./mapped-types-flatten/MappedTypesFlattenExercise";
import {AsyncAwaitFetchExercise} from "./async-await-fetch/AsyncAwaitFetchExercise";

export const routes = [
    {path: '/adding-types', component: AddingTypesExercise, title: "Adding Types"},
    {path: '/fp-basics', component: FpBasicsExercise, title: "FP Basics"},
    {path: '/palindromes', component: PalindromesExercise, title: "Palindromes"},
    {path: '/roman-numerals-easy', component: RomanNumeralsEasyExercise, title: "Roman Numerals Easy"},
    {path: '/roman-numerals-hard', component: RomanNumeralsHardExercise, title: "Roman Numerals Hard"},
    {path: '/unique-words', component: UniqueWordsExercise, title: "Unique Words"},
    {path: '/diamonds', component: DiamondsExercise, title: "Diamonds"},
    {path: '/number-converter', component: NumberConverterExercise, title: "Number Converter"},
    {path: '/lazy-fp', component: LazyFpExercise, title: "Lazy Custom FP Functions"},
    {path: '/mapped-types-date', component: MappedTypeDateExercise, title: "Mapped Types - Date"},
    {path: '/mapped-types-flatten', component: MappedTypesFlattenExercise, title: "Mapped Types - Flatten"},
    {path: '/tricky-reductions', component: TrickyReductionsExercise, title: "Tricky Reductions"},
    {path: '/refactoring', component: RefactoringExercise, title: "Refactoring"},
    {path: '/cinema', component: CinemaExercise, title: "Cinema"},
    {path: '/async-await-promises', component: AsyncAwaitPromisesExercise, title: "Async Await from Promises"},
    {path: '/async-await-fetch', component: AsyncAwaitFetchExercise, title: "Async Await - Fetch"},
    {path: '/discriminated-union', component: DiscriminatedUnionExercise, title: "Discriminated Union"},
    {path: '/rx', component: RxExercise, title: "RX"},
    {path: '/poker', component: PokerHandsExercise, title: "Poker"},
    {path: '/refactoring-hangman', component: HangmanRefactoringExercise, title: "Hangman Refactoring"},
];
