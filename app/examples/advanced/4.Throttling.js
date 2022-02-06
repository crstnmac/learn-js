//Throttling or sometimes also called as throttle function is a pracrtice used in websites.
//It is used to limit the number of times a function can be called.
//It makes the website faster and control the number of times a function can be called.

function throttleFunction(func, delay) {
  let prev = 0;
  return function (...args) {
    let now = new Date.getTime();
    if (now - prev > delay) {
      prev = now;
      return func(...args);
    }
  };
}
