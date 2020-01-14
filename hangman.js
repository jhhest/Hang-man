// Fill in the word to guess. Use only Upper caps.
const givenWord = "example";
const wordToGuess = givenWord.toUpperCase();
const wordToGuessArray = strToArray(wordToGuess);
const guessedLetters = ["E", "B", "X", "C", "D"];
const scoreboard = replaceLettersArrayWithX(wordToGuessArray);
// console.log(wordToGuess)

// convert a String to an array.
function strToArray(str) {
  const inputStr = str;
  const result = Array.from(inputStr);
  return result;
}
// // test:
// console.log("Convert a string into an Array:", strToArray(wordToGuess));

// replace each letter of string with X.
function replaceLettersArrayWithX(arr) {
  const inputArr = [...arr];
  const result = [];
  inputArr.forEach(element => result.push("X"));
  return result;
}
// // test
// console.log("replaceLettersArrayWithX():", replaceLettersArrayWithX(wordToGuessArray));

// Check a letter if it is in array;
function checkIfLetterIsInArray(letter, arr) {
  const inputLetter = letter.toUpperCase();
  const givenArr = [...arr];
  let result = undefined;
  givenArr.forEach(item => (inputLetter === item ? result = true : result = false));
  return result;
  // should return true or false.
}
console.log(checkIfLetterIsInArray("b", wordToGuessArray));
// TODO: Extract correct guessed letters
