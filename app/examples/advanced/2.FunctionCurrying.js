//function currying in javascript

//Currying is a technique to convert a function with multiple arguments into a sequence of functions, each with one argument.

//In other words, when a function, instead of taking multiple arguments, takes the first one and returns a function that takes the second argument and returns the sum until the last argument.

//function currying by bind method

function add(a, b) {
  console.log(a + b);
}

add(2, 3);
add(2, 4);
add(2, 5);

let first = add.bind(this, 2);
first(3);
first(4);
first(5);

//function currying by closure

function add(a) {
  return function addx(b) {
    console.log(a + b);
  };
}

let adde = add(2);
console.log(addx);
adde(3);
adde(5);
adde(6);
