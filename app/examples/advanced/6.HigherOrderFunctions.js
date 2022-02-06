//Higher order functions are functions that take other functions as arguments or return a function.

let radius = [2, 3, 4, 5];

let area = function (radius) {
  return Math.PI * radius * radius;
};

let circumference = function (radius) {
  return 2 * Math.PI * radius;
};

let diameter = function (radius) {
  return 2 * radius;
};

Array.prototype.calculate = function (func) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(func(this[i]));
  }
  return output;
};

console.log(radius.map(area));

console.log(radius.calculate(area));
console.log(radius.calculate(circumference));
console.log(radius.calculate(diameter));
