//A polyfill is a JavaScript code that provides a feature that is not native to the browser.

let name = {
  firstName: "Criston",
  lastName: "Mascarenhas",
};

let fullName = function (respect, nationality) {
  log(this.firstName + " " + this.lastName + " " + respect + " " + nationality);
};

if (Function.bindx === undefined) {
  console.log("undefined");
  Function.prototype.myBind = function (name, respect) {
    let obj = this;
    return function (nationality) {
      obj.call(name, respect, nationality);
    };
  };

  let getFullName1 = fullName.myBind(name, "Ji");
  getFullName1("Indian");
} else {
  console.log("not undefined");
  let getFullName = fullName.bind(name, "ji");
  getFullName("Indian");
}
