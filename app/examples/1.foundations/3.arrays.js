/* Loading a CSS file into the notebook. */
import("../../style.css");
/* js */
import { log, logTitle } from "./logger";
/* your imports */
logTitle("Arrays");
/*coding examples*/

var name = "alex";
var names = ["Alex", "Maria", "Sam"];

log(names);

log(names[1]);

log(names.length);

for (var n of names) {
  log(n);
}

names.forEach(function (n, i) {
  log(i + " - " + n);
});
