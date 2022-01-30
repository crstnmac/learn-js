/* Loading a CSS file into the notebook. */
import("../../style.css");
/* js */
import { log, logTitle } from "./logger";
/* your imports */
logTitle("Equality without type coercion & 3 equal sign");
/*coding examples*/

log("With type coercion");

log(typeof 0 + " " + typeof false);
log(0 == false);

log(typeof "0" + " " + typeof false);
log("0" == false);

log(typeof 1 + " " + typeof "1");
log(1 == "1");

log("Without type coercion");
log(typeof 0 + " " + typeof false);
log(0 === false);

log(typeof "0" + " " + typeof false);
log("0" === false);

log(typeof 1 + " " + typeof "1");
log(1 === "1");
