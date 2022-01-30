/* Loading a CSS file into the notebook. */
import("../../style.css");
/* js */
import { log, logTitle } from "./logger";
/* your imports */
logTitle("Loops");
/*coding examples*/

var persons = [
  {
    name: "Alex",
    age: 22,
  },
  {
    name: "Maria",
    age: 30,
  },
];
for (var i = 0; i < persons.length; i++) {
  log(persons[i].name);
  log(persons[i].age);
  log("-------------------");
}

var number = 0;

while (number < 5) {
  log(number);
  number += 1;
}

var i = 0;
do {
  i++;
  log(i);
} while (i < 5);
