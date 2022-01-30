/* Loading a CSS file into the notebook. */
import("../../style.css");
/* js */
import { log, logTitle } from "./logger";
/* your imports */
logTitle("Variables");
/*coding examples*/

var name = "Maria Jones";
var age = 23.5;
var hasDriverLicense = true;

var empty = undefined;

log(name + " " + "type = " + typeof name);
log(age + " " + "type = " + typeof age);
log(hasDriverLicense + " " + "type = " + typeof hasDriverLicense);
log(empty + " " + "type = " + typeof empty);
