// Private Class Fields

class ColorButton extends HTMLElement {
  //All fields are public by default
  color = "red";

  //Private fields start with a #, can only be changed from inside the class.
  #clicked = false;

  #somethingOnclick() {
    console.log("Clicked privte method");
  }
}

const button = new ColorButton();

//public fields can be accessed and changed by anyone
button.color = "blue";

//syntax error
// console.log(button.#clicked);
// button.#clicked = true;

//Static class field
class Circle {
  static #PI = 3.14;

  static calculateArea(radius) {
    return this.#PI * radius * radius;
  }

  static calculateProperties(radius) {
    return {
      radius: radius,
      area: calculateArea(radius),
    };
  }
}

Circle.PI = 3.14;
