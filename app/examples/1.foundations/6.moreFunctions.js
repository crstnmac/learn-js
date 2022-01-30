/* Loading a CSS file into the notebook. */
import("../../style.css");
/* js */
import { log, logTitle } from "./logger";
/* your imports */
logTitle("More Functions");
/*coding examples*/

var person = { name: "Anna", age: 30 };
log(Object.keys(person));
log(Object.values(person));

log("James Bond".toLowerCase());
log("James Bond".toUpperCase());
log("James Bond".endsWith("Bond"));
log("James Bond".startsWith("Bond"));
