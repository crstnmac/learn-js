let name = {
  firstName: "Criston",
  lastName: "Mascarenhas",
};

let printFullName = function (hometown, state) {
  console.log(
    this.firstName + " " + this.lastName + " from " + hometown + "," + state
  );
};

printFullName.call(name, "Puttur", "Karnataka");
let name2 = {
  firstName: "Jane",
  lastName: "Mascarenahas",
};

//function borrowing
printFullName.call(name2, "Puttur", "Karnataka");

printFullName.apply(name2, ["Puttur", "Karnataka"]);

//bind method
let printMyName = printFullName.bind(name2, "Puttur", "Karnataka");

console.log(printMyName);
printMyName();
