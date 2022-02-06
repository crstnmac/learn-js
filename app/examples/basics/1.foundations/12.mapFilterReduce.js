/* Loading a CSS file into the notebook. */
import("../../style.css");
/* js */
import { log, logTitle } from "./logger";
/* your imports */
logTitle("Map | Filter | Reduce");
/*coding examples*/

var map = [1, 2, 3, 4, 5].map(function (n) {
  return n * 2;
});

log("[].map");
log(map);
log(typeof map);

log("[].filter");
var filter = [1, 2, 3, 4, 5, 10, 29, 100].filter(function (n) {
  return n % 2 === 0;
});
log(filter);
log(typeof filter);

log("[].reduce");
var reduce = [1, 2, 3, 4, 5, 10, 29, 100].reduce(function (
  accumulator,
  current
) {
  return accumulator + current;
});
log(reduce);
log(typeof reduce);
