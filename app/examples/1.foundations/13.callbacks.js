/* Loading a CSS file into the notebook. */
import("../../style.css");
/* js */
import { log, logTitle } from "./logger";
/* your imports */
logTitle("Callbacks");
/*coding examples*/
function callBackExample(name, callback) {
  log(callback(name));
}

callBackExample("Criston Mascarenhas", function (name) {
  return "Hello " + name;
});
