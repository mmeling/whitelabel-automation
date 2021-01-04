class Order {
  constructor({
    itemName,
    itemPrice,
    subtotal,
    tax,
    tip,
    total
  } = {}) {
    this._itemName = itemName;
    this._itemPrice = itemPrice;
    this._subtotal = subtotal;
    this._tax = tax;
    this._tip = tip;
    this._total = total;
  }

  set itemName(itemName) {
    this._itemName = itemName;
  }

  set itemPrice(itemPrice) {
    this._itemPrice = itemPrice;
  }

  set subtotal(subtotal) {
    this._subtotal = subtotal;
  }

  set tax(tax) {
    this._tax = tax;
  }

  set tip(tip) {
    this._tip = tip;
  }

  set total(total) {
    this._total = total;
  }

  get itemName() {
    return this._itemName;
  }

  get itemPrice() {
    return this._itemPrice;
  }

  get subtotal() {
    return this._subtotal;
  }

  get tax() {
    return this._tax;
  }

  get tip() {
    return this._tip;
  }

  get total() {
    return this._total;
  }
}

module.exports = Order;
