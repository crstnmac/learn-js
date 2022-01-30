/* Loading a CSS file into the notebook. */
import("../../style.css");
/* js */
import { log, logTitle } from "./logger";
/* your imports */
logTitle("Function Default Parameters");
/*coding examples*/

const calculatePay = (
  yearSalary,
  bonus = {
    teamBonus: 0,
    employeeBonus: 0,
  }
) => yearSalary + bonus.teamBonus + bonus.employeeBonus;

log(
  calculatePay(22000, {
    teamBonus: 10000,
    employeeBonus: 5000,
  })
);
