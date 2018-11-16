const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const password = '123456';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt,( err, hash) => {
//         console.log(hash);
//     })
// })

const hashedPassword = '$2a$10$WMuk63/izvm/7wWAAlEWfurQ0n74rkFDGsAJuh9y4az2TSgUNbhsa';

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res);
});

// var message = 'I am user 3';

// const hash = SHA256(message).toString();

// console.log(`Message: ${message}`);
// console.log(`Hash: ${hash}`);

// let data = {
//     data: 10
// }

// var token = jwt.sign(data, '123abc');
// console.log(token);

// var decoded = jwt.verify(token, '123abc');
// console.log('decoded', decoded);


