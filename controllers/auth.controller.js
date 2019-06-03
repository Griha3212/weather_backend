
//подлючение
const userService = require('../services/users.service');
const bcrypt = require('bcrypt');
const saltRounds = 10;
//функции логина и регистрации контроллера
const login = (req, res) => {
    console.log('login');
    res.status(200).send({
        message: 'login'
    });
}

const register = async (req, res) => {
    console.log('register', req.body)
    // return userService.createUser(req.body)
    //     .then(result => {
    //         res.status(200).send(result)
    //     })
    //     .catch(err => {
    //         res.status(500).send(err)
    //     })

    try {
        if (!req.body.username || !req.body.email || !req.body.password) {
            throw new Error('All fields are required')
        }
        const usersExists = await userService.getUsers({
            username: req.body.username
        });
        if (usersExists.length > 0) {
            throw new Error('this username already exists')
        } else {
            // async hash function

           


                bcrypt.hash(req.body.password, saltRounds,   async (err, hash) => {
                    const param = {
                        ...req.body,
                        password: hash
                    }
                    const result = await userService.createUser(param);
                    res.status(200).send(result);
                });

            






        }
    } catch (err) {
        res.status(500).send({ message: err.message })
    }

    // res.status(200).send({
    //     message: 'register'
    // });
}

module.exports = {
    login,
    register
}