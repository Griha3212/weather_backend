
const User = require('../models/user.model');

const getUsers = (param) => {
    return new Promise((resolve, reject) => {
        User.find(param, function(err, user) {
            if (err) {
                reject(err);
            } else  {
                resolve(user)
            }
        }) 
    })
}

const createUser = (param) => {
    return new Promise((resolve, reject) => {
        User.create(param, function(err, user) {
            console.log('err', err)
            console.log('user', user)
            if (err) {
                reject(err);
            } else  {
                resolve(user)
            }
        }) 
    })
}

module.exports = {
    getUsers,
    createUser
}