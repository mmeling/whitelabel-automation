const uuid = require('uuid');
const Order = require('./Order');
const Card = require('./Card');

class User {
  constructor({
    // set $env for non-staging info. We can't push real cards to git
    email = `QAAUTO+${browser.config.app}.${Date.now()}@thelevelup.com`,
    firstName = 'LevelUp',
    lastName = 'LU393963TEST',
    phone = `619${Math.floor(10000000 + Math. random() * 9000000)}`,
    password = uuid.v4(),
    birthday = '6/14/1983',
    gender = 'Prefer not to say'
  } = {}) {
    this._email = email;
    this._firstName = firstName;
    this._lastName = lastName;
    this._phone = phone;
    this._password = password;
    this._birthday = birthday;
    this._gender = gender;
    this._cards = [];
    this._cards.push(new Card);
    this._orders = [];
  }

  get email() {
    return this._email;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get phone() {
    return this._phone;
  }

  get password() {
    return this._password;
  }

  get birthday() {
    return this._birthday;
  }

  get gender() {
    return this._gender;
  }

  get cards() {
    return this._cards;
  }

  get orders() {
    return this._orders;
  }

  addCard({
    nameOnCard,
    number,
    expM,
    expY,
    cvv,
    issuer,
    zip,
    nickname
  }) {
    return this._cards.push(new Card({
      nameOnCard,
      number,
      expM,
      expY,
      cvv,
      issuer,
      zip,
      nickname
    }));
  }

  addOrder({
    location,
    items,
    subtotal,
    tax,
    tip,
    total
  }) {
    return this._orders.push(new Order({
      location,
      items,
      subtotal,
      tax,
      tip,
      total
    }));
  }
}

module.exports = User;
