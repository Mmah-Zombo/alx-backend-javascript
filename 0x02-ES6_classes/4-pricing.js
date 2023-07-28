/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import Currency from './3-currency';

export default class Pricing extends Currency {
  constructor(amount, currency) {
    super(currency.code, currency.name);
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    this._currency = value;
  }

  displayFullPrice() {
    return `${this.amount} ${this.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return (amount * conversionRate);
  }
}
