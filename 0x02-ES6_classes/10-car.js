/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    return this.constructor();
  }
}
