/* Loading a CSS file into the notebook. */
import("../../style.css");
/* js */
import { log, logTitle } from "./logger";
/* your imports */
logTitle("Let keyword");
/*coding examples*/

for (var i = 0; i < 10; i++) {
  log(i);
}

log(i);

for (let i = 0; i < 10; i++) {
  log(i);
}

log(i);
