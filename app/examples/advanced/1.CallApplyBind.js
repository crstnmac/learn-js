//Call , Apply and Bind function in javascript

//Call invokes the function and allows you to pass arguments one by one.

//Apply invokes the function and allows you to pass arguments as an array.

//Bind creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

let student = {
  name: "Ram",
  age: 25,
  details: function (surname) {
    console.log(surname + this.name + " " + this.age);
  },
};

// student.details();

let student1 = { name: "Criston", age: "23" };
student.details.call(student1);
student.details.apply(student1, ["Mr."]);
let detailsFun = student.details.bind(student1, ["Mr."]);
detailsFun();
