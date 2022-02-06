/* Loading a CSS file into the notebook. */
import("../../style.css");
/* js */
import { log, logTitle } from "./logger";
/* your imports */
logTitle("Lexical this");
/*coding examples*/

const person = {
  name: "Alex",
  cars: ["ferrari", "lambo"],
  toString: function () {
    // log(`${this.name} has ${this.cars.length} cars`);
    this.cars.forEach((car) => {
      log(`${this.name} has a ${car}`);
    });
  },
};

person.toString();
