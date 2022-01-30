/* Loading a CSS file into the notebook. */
import("../../style.css");
/* js */
import { log, logTitle } from "./logger";
/* your imports */
logTitle("Functions");
/*coding examples*/

// + - / % *

function addNumbers(n1, n2) {
  //function body
  // 3 + 2
  var result = n1 + n2;
  return result;
}

var result = addNumbers(5, 6);
log(result);
