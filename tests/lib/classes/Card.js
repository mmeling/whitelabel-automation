class Card {
  constructor({
    // set $env for non-staging info. We can't push real cards to git
    nameOnCard = 'QA LU366363TEST',
    number = 4111111111111111,
    expM = 12,
    expY = 2024,
    cvv = 123,
    issuer = 'Visa',
    zip = 92116,
    nickname = ''
  } = {}) {
    this._nameOnCard = nameOnCard;
    this._number = number;
    this._expM = expM;
    this._expY = expY;
    this._cvv = cvv;
    this._issuer = issuer;
    this._zip = zip;
    this._nickname = nickname;
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

  set zip(zip) {
    this._zip = zip;
  }

  set nickname(nickname) {
    this._nickname = nickname;
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

  get zip() {
    return this._zip;
  }

  get nickname() {
    return this._nickname;
  }
}

module.exports = Card;
