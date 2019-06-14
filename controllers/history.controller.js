// req.user.id
const User = require('../models/user.model');

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


// app.get('/cats/:_id', function (req, res) {
//   console.log('req.params', req.params)
//   Cat.find(req.params, function (err, cats) {
//     if (err) return res.status(500).send({
//       message: 'Error'
//     })
//     // saved!
//     res.status(200).send(cats)
//   });
// });

// const addHistoryData = async (req, res) => {
//     try {
//         const users = await userService.getUsers({});
//         res.status(200).send(users)
//     } catch (err) {
//         res.status(500).send(err)
//     }
//     // User.find({}, function (err, users) {
//     //         if (err) return res.status(500).send({
//     //           message: 'Error'
//     //         })
//     //         res.status(200).send(users)
//     //       });

// }


module.exports = {
    getUserInfo,
}