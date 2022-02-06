//Debouncing is javascript's way of throttling events.
//Debouncing is a technique where we wait a certain amount of time before firing an event.

function debounceFun(func, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    let args = arguments;
    timer = setTimeout(function () {
      func.apply(this, args);
    }, delay);
  };
}
