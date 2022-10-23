import React, {FC} from "react";
import _ from "lodash"

const data = [
  "A man, a plan, a canal, Panama",
  "Gold is where you find it",
  "If I had a hi-fi",
  "Fortune favors the prepared mind",
  "Rats live on no evil star",
  "There is no abstract living",
  "Some men interpret nine memos"
];

export const PalindromesExercise: FC = () => {
  const solution1 = () => {
    let output = "";
    for (const str of data) {
      const characters = str.toLowerCase().split("");
      const forward = [];
      const backward = [];
      for (const char of characters) {
        if (char >= 'a' && char <= 'z') {
          forward.push(char);
          backward.unshift(char);
        }
      }
      const result1 = forward.join("");
      const result2 = backward.join("");
      output += `"${str}" ${result1 === result2 ? "is" : "is not"} a palindrome\n`;
    }
    return output;
  };

  const solution2 = () => {
    let output = "";
    for (const str of data) {
      const normalised = str
        .toLowerCase()
        .replace(/[^a-z]+/g, '');
      const reversed = normalised.split("").reverse().join("");

      output += `"${str}" ${normalised === reversed ? "is" : "is not"} a palindrome\n`;
    }
    return output;
  };

  const solution3 = () => {
    let output = "";
    for (const str of data) {
      const normalised = str
        .toLowerCase()
        .replace(/[^a-z]+/g, '');
      let isPalindrome = true;
      for (let x = 0, y = normalised.length - 1; x < y; x++, y--) {
        if (normalised.charAt(x) !== normalised.charAt(y)) {
          isPalindrome = false;
          break;
        }
      }

      output += `"${str}" ${isPalindrome ? "is" : "is not"} a palindrome\n`;
    }
    return output;
  };

  const solution4 = () => {
    const isLetter = (char: string) => char >= 'a' && char <= 'z';

    let output = "";
    for (const str of data) {
      const normalised = str
        .toLowerCase()
      let isPalindrome = true;
      let forward = 0;
      let backward = normalised.length - 1;
      while (forward < backward) {
        while (!isLetter(normalised.charAt(forward))) {
          forward++;
        }
        while (!isLetter(normalised.charAt(backward))) {
          backward--;
        }
        if (normalised.charAt(forward) !== normalised.charAt(backward)) {
          isPalindrome = false;
          break;
        }
        forward++;
        backward--;
      }

      output += `"${str}" ${isPalindrome ? "is" : "is not"} a palindrome\n`;
    }
    return output;
  };

  const solution5 = () => {
    const isLetter = (char: string) => char >= 'a' && char <= 'z';

    let output = "";
    for (const str of data) {
      const characters = str
        .toLowerCase()
        .split("");

      const normalised = characters.filter(char => isLetter(char));
      const forward = normalised.join("");
      const backward = normalised.reverse().join("");

      output += `"${str}" ${forward === backward ? "is" : "is not"} a palindrome\n`;
    }
    return output;
  };

  const solution6 = () => {
    let output = "";
    for (const str of data) {
      const normalised = str
        .toLowerCase()
        .replace(/[^a-z]+/g, '')
        .split("");

      const zipped = _.zip(normalised, [...normalised].reverse());
      const isPalindrome = _.every(zipped, pair => pair[0] === pair[1]);

      output += `"${str}" ${isPalindrome ? "is" : "is not"} a palindrome\n`;
    }
    return output;
  };

  const output1 = solution1();
  const output2 = solution2();
  const output3 = solution3();
  const output4 = solution4();
  const output5 = solution5();
  const output6 = solution6();

  // --- Ignore ---
  return (
    <div>
      <h3>Solution 1</h3>
      <pre>{output1}</pre>
      <h3>Solution 2</h3>
      <pre>{output2}</pre>
      <h3>Solution 3</h3>
      <pre>{output3}</pre>
      <h3>Solution 4</h3>
      <pre>{output4}</pre>
      <h3>Solution 5</h3>
      <pre>{output5}</pre>
      <h3>Solution 6</h3>
      <pre>{output6}</pre>
    </div>
  )
};
