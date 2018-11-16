const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
// var message = 'I am user 3';

// const hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

let data = {
    data: 10
}

var token = jwt.sign(data, '123abc');
console.log(token);

var decoded = jwt.verify(token, '123abc');
console.log('decoded', decoded);
