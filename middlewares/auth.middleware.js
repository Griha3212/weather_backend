const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');
const Constants = require('../config/constants');

const checkToken = (req, res, next) => {
    const token = req.headers.authorization;
    // console.log('Это авторизация', req.headers.authorization);
    if (!token) next('Unauthorized')


    else if (token) {
        // jwt.verify
        var decoded = jwt.verify(token, Constants.privateKey);
        console.log(decoded.id) // bar
        //передача ответа id юзера
        req.user = decoded;
        next()

    }
}

module.exports = {
    checkToken
}