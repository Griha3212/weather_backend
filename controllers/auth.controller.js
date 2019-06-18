
//подлючение
const userService = require('../services/users.service');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const User = require('../models/user.model');

const Constants = require('../config/constants')
//функции логина и регистрации контроллера



const createToken = async () => {
    try {
        var token = jwt.sign({
            userID: user.email,
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
        }, 'secret');

        return token;
    } catch (err) {

        res.status(500).send({ message: err.message })

    }


}





// const login =  async (email, password, callback) => {
//     User.findOne({ email: email })
//     .exec(function (err, user) {
//       if (err) {
//         return callback(err)
//       } else if (!user) {
//         var err = new Error('User not found.');
//         err.status = 401;
//         return callback(err);
//       }
//       bcrypt.compare(password, user.password, function (err, result) {
//         if (result === true) {
//           return callback(null, user);
//         } else {
//           return callback();
//         }
//       })
//     });





const login = async (req, res) => {

    //поиск email в БД
    try {
        const userExists = await userService.getUser({
            email: req.body.email
        });
        //Если запись с таким email существует

        if (!userExists) {
            throw new Error('You entered incorrect login or password')
        }

        const match = await bcrypt.compare(req.body.password, userExists.password);

        if (match) {

            // console.log('Constants', Constants);    
            // create JWT-token
            jwt.sign({ id: userExists._id }, Constants.privateKey, function (err, token) {
                // console.log(err, token);
                console.log("Login successful");
                res.status(200).send({
                    token: token,
                    userId: userExists._id
                });
            });




        }
        else if (!match) {
            throw new Error('You entered incorrect login or password')
        }




    } catch (err) {
        res.status(500).send({ message: err.message })
    }


}



const CheckAllUsers = async (req, res) => {
    try {
        const users = await userService.getUsers({});
        res.status(200).send(users)
    } catch (err) {
        res.status(500).send(err)
    }
    // User.find({}, function (err, users) {
    //         if (err) return res.status(500).send({
    //           message: 'Error'
    //         })
    //         res.status(200).send(users)
    //       });

}




const register = async (req, res) => {
    console.log('register', req.body)


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


            bcrypt.hash(req.body.password, saltRounds, async (err, hash) => {
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

const checkLogin = (req, res) => {
    res.status(200).send(req.user.id);
}

const getUserInfo = (req, res) => {
    // const userId = req.user.id;

    User.findById(req.user.id, function (err, users) {
        if (err) return res.status(500).send({
            message: 'Error'
        })
        // saved!
        res.status(200).send(users)
    });
}

module.exports = {
    login,
    register,
    CheckAllUsers,
    checkLogin,
    getUserInfo
}