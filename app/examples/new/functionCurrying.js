let multiply = function (x, y) {
  console.log(x * y);
};
let multiplyByTwo = multiply.bind(this, 2);
let multiplyByThree = multiply.bind(this, 3);

multiplyByTwo(3);

multiplyByThree(5);

//using closures

let multiply2 = function (x) {
  return function (y) {
    console.log(x, y);
    console.log(x * y);
  };
};

let multplyByqqq = multiply2(2);
multplyByqqq(3);
