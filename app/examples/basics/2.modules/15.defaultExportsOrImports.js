/* Loading a CSS file into the notebook. */
import("../../style.css");
/* js */
import { log, logTitle } from "./logger";
/* your imports */
import Animal from "../examples/2.modules/Animal";
logTitle("Default Exports  / Imports");
/*coding examples*/

var animal = new Animal("Elephant", 10);
animal.speak(); //see console output
