class Order {
  constructor({
    location,
    items = [],
    subtotal,
    tax,
    tip,
    total
  } = {}) {
    this._location = location;
    this._items = items;
    this._subtotal = subtotal;
    this._tax = tax;
    this._tip = tip;
    this._total = total;
  }

  set nameOnCard(nameOnCard) {
    this._nameOnCard = nameOnCard;
  }

  set number(number) {
    this._number = number;
  }

  set expM(expM) {
    this._expM = expM;
  }

  set expY(expY) {
    this._expY = expY;
  }

  set cvv(cvv) {
    this._cvv = cvv;
  }

  set issuer(issuer) {
    this._issuer = issuer;
  }

  get nameOnCard() {
    return this._nameOnCard;
  }

  get number() {
    return this._number;
  }

  get expM() {
    return this._expM;
  }

  get expY() {
    return this._expY;
  }

  get cvv() {
    return this._cvv;
  }

  get issuer() {
    return this._issuer;
  }
}

module.exports = Order;
