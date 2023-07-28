/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    const Clone = this.constructor();
    return new Clone();
  }
}
