/* Loading a CSS file into the notebook. */
import("../../style.css");
/* js */
import { log, logTitle } from "./logger";
/* your imports */
logTitle("Const keyword");
/*coding examples*/

let name = "Maria";
name = {};
name = 2;

log(name);

/* ************************* */

const person = {};

person["name"] = "Maria";

log(person.name);

const array = [];
array.push("Maria from Array");

log(array[0]);
