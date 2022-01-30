/* Loading a CSS file into the notebook. */
import("../../style.css");
/* js */
import { log, logTitle } from "./logger";
/* your imports */
logTitle("Break & Continue");
/*coding examples*/

var persons = [
  { name: "Alex", age: 22 },
  { name: "Maria", age: 30 },
];

var number = 0;

while (number < 5) {
  number++;

  if (number < 5) {
    continue;
  }
  log(number);
}
