/* Loading a CSS file into the notebook. */
import("../../style.css");
/* js */
import { log, logTitle } from "./logger";
/* your imports */
logTitle("Spread Operator Objects");
/*coding examples*/

const address = {
  city: "LA",
  country: "USA",
  postCode: "LA44",
};

const name = {
  firstName: "Andy",
  lastName: "Jones",
};

const person = { ...address, ...name };

log(JSON.stringify(person, null, 2));
