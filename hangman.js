// Fill in the word to guess. Use only Upper caps.
const guessedWord = "EXAMPLE";
const guessedWordArray = strToArray(guessedWord);
const guessedLetters = [];
const scoreboard = [];

// convert a String to an array.
function strToArray(str) {
  const inputStr = str;
  const result = Array.from(inputStr);
  return result;
}
gi// // test:
// console.log("Convert a string into an Array:", strToArray(guessedWord));

// replace each letter of string with X.
function replaceLettersArrayWithX(arr) {
  const inputArr = [...arr];
  const result = [];
  inputArr.forEach(element => result.push("X"));
  return result;
}

// // test
// console.log("replaceLettersArrayWithX():", replaceLettersArrayWithX(guessedWordArray));

// TODO:
// Extract correct guessed letters

// Convert a string to uppercase
// console.log(replaceLettersArrayWithX(guessedWordTransformedToArray));
