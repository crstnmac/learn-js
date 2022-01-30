/* Loading a CSS file into the notebook. */
import("../../style.css");
/* js */
import { log, logTitle } from "./logger";
/* your imports */
logTitle("Enhanced Object Properties");
/*coding examples*/

const pricePropName = "PRICE";

const calculator = (name, price) => {
  return {
    name,
    add(n1, n2) {
      return n1 + n2;
    },
    [pricePropName.toLowerCase()]: price,
  };
};

const calc = calculator("casio", 19.99);

log(calc.name);
log(calc.add(10, 20));
log(calc.price);
