/* Loading a CSS file into the notebook. */
import("../../style.css");
/* js */
import { log, logTitle } from "./logger";
/* your imports */
logTitle("Objects");
/*coding examples*/

var name = "Maria Jones";
var age = 23.5;
var hasDriverLicense = true;

var person = {
  name: "Maria Jones",
  age: 21,
  hasDriverLicense: true,
  dateOfBirth: "01/01/2000",
  address: {
    firstLine: "123 Main St",
    postCode: "SE1",
    country: "India",
  },
};

log(JSON.stringify(person));

log(person.name);
log(person.age);
log(person.hasDriverLicense);
log(JSON.stringify(person.address));
log(Object.values(person));
