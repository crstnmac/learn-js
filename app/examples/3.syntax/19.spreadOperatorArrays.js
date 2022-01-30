/* Loading a CSS file into the notebook. */
import("../../style.css");
/* js */
import { log, logTitle } from "./logger";
/* your imports */
logTitle("Spread Operator Arrays");
/*coding examples*/

const arrayOne = ["Maria", "Anna", "Sophia"];
const arrayTwo = ["Rahul", "Rohan", "Ria"];

const concatArray = [...arrayOne, ...arrayTwo];

concatArray.forEach(function (name) {
  log(name);
});

const name = "Marian";
const nameToArray = [...name];

nameToArray.forEach(function (letter) {
  log(letter);
});

const addNumbers = function (n1, n2, n3) {
  return n1 + n2 + n3;
};

const numbers = [1, 7, 19];

//const addition = addNumbers(numbers[0], numbers[1], numbers[2]);

const addition = addNumbers(...numbers);

log(addition);
