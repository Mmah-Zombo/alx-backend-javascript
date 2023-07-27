import Currency from './3-currency'

export default class Pricing extends Currency {
  constructor (amount, currency) {
    super(currency)
    this._amount = amount
    this._currency = currency
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
    return `${this.amount} ${this.name} (${this.code})`
  }

  static convertPrice (amount, conversionRate) {
    return (amount * conversionRate)
  }
}
