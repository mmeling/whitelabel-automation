// my_requires.js
const bodyParser = require('body-parser')
const parseForm = bodyParser.urlencoded({extended: false})

const DOMPurify = require('dompurify');
const {JSDOM} = require('jsdom');

const jwt = require('jsonwebtoken');
const passport = require('passport');
require('../config/passport')(passport)

module.exports = {
    bodyParser: bodyParser,
    parseForm: parseForm,
    jwt: jwt,
    passport: passport,
    bcrypt: bcrypt
}