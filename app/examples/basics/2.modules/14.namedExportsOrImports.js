/* Loading a CSS file into the notebook. */
import("../../style.css");
/* js */
import { log, logTitle } from "./logger";
/* your imports */
import { add, subtract, PI } from "./math";
logTitle("Named Exports  / Imports");
/*coding examples*/

log(add(2, 2));
log(subtract(2, 2));
log(PI);
