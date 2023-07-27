import Currency from './3-currency'

export default class Pricing extends Currency {
  constructor (Number, Currency) {
    this._amount = Number
    this._currency = Currency
  }

  get amount () {
    return this._amount
  }

  get currency () {
    return this._currency
  }

  set amount (value) {
    this._amount = value
  }

  set currency (value) {
    this._currency = value
  }

  displayFullPrice () {
    return `${this.amount} ${this.currency} ${this.code}`
  }

  static convertPrice (amount, conversionRate) {
    return (amount * conversionRate)
  }
}
