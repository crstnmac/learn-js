/* Loading a CSS file into the notebook. */
import("../../style.css");
/* js */
import { log, logTitle } from "./logger";
/* your imports */
logTitle("If Statement");
/*coding examples*/

var person = {
  name: "Anna",
  age: 17,
};

if (person.age >= 18) {
  log(person.name + " is an adult");
} else if (person.age == 17) {
  log(person.name + " is about to be an adult");
} else {
  log(person.name + "is not an adult");
}
