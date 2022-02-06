/* Loading a CSS file into the notebook. */
import("../../style.css");
/* js */
import { log, logTitle } from "./logger";
/* your imports */
logTitle("Object Destructuring");
/*coding examples*/

const getUser = () => {
  return {
    name: "John",
    surname: "Doe",
    gender: "male",
    address: {
      country: "United States",
      city: "California",
      postCode: "CA",
      fullAddress: {
        doorNumber: 22,
        street: "LA st",
      },
    },
    age: 29,
  };
};

const user = getUser();

// const name = user.name;
// const age = user.age;
// const country = user.address.country;
// const doorNumber = user.address.fullAddress.doorNumber;

const {
  name: theName,
  age: theAge,
  address: { country: theCountry },
} = user;

const {
  address: {
    fullAddress: { doorNumber: theDoorNumber },
  },
} = user;

log(theName);
log(theAge);
log(theCountry);
log(theDoorNumber);
