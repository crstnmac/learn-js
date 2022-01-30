/* Loading a CSS file into the notebook. */
import("../../style.css");
/* js */
import { log, logTitle } from "./logger";
/* your imports */
logTitle("Promise & fetch api");
/*coding examples*/

const getRandomUsers = (n) => {
  const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${n}`);
  log(fetchRandomUsers);
  fetchRandomUsers.then((data) => {
    log(data);
    data.json().then((randomUsers) => {
      randomUsers.results.forEach((user) => {
        const { gender, email } = user;
        log(`${gender} = ${email}`);
      });
    });
  });
};

getRandomUsers(10);
