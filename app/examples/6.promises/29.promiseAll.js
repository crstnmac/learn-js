/* Loading a CSS file into the notebook. */
import("../../style.css");
/* js */
import { log, logTitle } from "./logger";
/* your imports */
logTitle("Promise All");
/*coding examples*/

const namesPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(["John", "Jane", "Jim"]);
  }, 3000);

  setTimeout(() => {
    reject("no data back from the server, there was an error");
  }, 5000);
});

const surNamesPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(["Willams", "Smith", "Brown"]);
  }, 3000);

  setTimeout(() => {
    reject("no data back from the server, there was an error");
  }, 5000);
});

// promise
//   .then((response) => {
//     log(response);
//   })
//   .catch((error) => {
//     log(error);
//   });

Promise.all([namesPromise, surNamesPromise])
  .then((data) => {
    const [names, surNames] = data;
    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      const surname = surNames[i];
      log(`${name} ${surname}`);
    }
  })
  .then((data) => {
    log(data);
  })
  .catch((error) => {
    log(error);
  });
