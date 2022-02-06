export default class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}
