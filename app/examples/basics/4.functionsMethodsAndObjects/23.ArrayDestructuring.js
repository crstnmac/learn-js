/* Loading a CSS file into the notebook. */
import("../../style.css");
/* js */
import { log, logTitle } from "./logger";
/* your imports */
logTitle("Array Destructuring");
/*coding examples*/

const names = ["Anna", "Mariam", "Joe", "Mark", "Matt"];

// const anna = names[0];
// const mariam = names[1];
// const joe = names[2];

// const [anna, , joe, ...restOfNames] = names;

const [a] = names;

log(a);
log(`${anna} ${joe}`);
log(restOfNames);
log(restOfNames.length);
