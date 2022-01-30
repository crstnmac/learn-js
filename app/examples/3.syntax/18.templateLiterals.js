/* Loading a CSS file into the notebook. */
import("../../style.css");
/* js */
import { log, logTitle } from "./logger";
/* your imports */
logTitle("Template Literals");
/*coding examples*/

const name = "Anna";
const country = "Canada";
const age = 33;

log("Name: " + name + ", Country: " + country + ", Age: " + age);
log(`Name: ${name}, Country: ${country}, Age: ${age}`);
