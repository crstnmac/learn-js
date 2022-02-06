/* Loading a CSS file into the notebook. */
import("../../style.css");
/* js */
import { log, logTitle } from "./logger";
/* your imports */
logTitle("Switch Statement");
/*coding examples*/

var person = {
  name: "Anna",
  age: 30,
};

switch (true) {
  case person.age == 17:
    log(person.name + " is about to be an adult");
    break;
  case person.age >= 18:
    log(person.name + " is an adult");
    break;
  default:
    log("We dont know");
}

switch (new Date().getDay()) {
  case 5:
    log("Friday");
    break;
  default:
    log("We dont know");
}
