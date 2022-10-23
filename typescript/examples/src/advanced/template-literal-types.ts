

type SimplePattern = `${string} ${number} ${number}`;

const valid: SimplePattern = "abc 123 456";
// const invalid1: SimplePattern = "abc";
// const invalid2: SimplePattern = "abc 456";
// const invalid3: SimplePattern = "abc 123 def";


type Suit =
  "Hearts" | "Diamonds" |
  "Clubs" | "Spades";

type Rank =
  "Ace" | "Two" | "Three" | "Four" | "Five" |
  "Six" | "Seven" | "Eight" | "Nine" | "Ten" |
  "Jack" | "Queen" | "King";

type Card = `${Rank} of ${Suit}`;

const validCard: Card = "Three of Hearts";
// const invalidCard: Card = "Three of Heart"; // Compiler Error

// ------------------

interface UserData {
  name: string;
  age: number;
  registered: boolean;
}

// Generates: "getName" | "getAge" | "getRegistered"
type UserDataAccessorNames = `get${Capitalize<keyof UserData>}`;
