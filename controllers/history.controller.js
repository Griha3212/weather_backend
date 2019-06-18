// req.user.id
const User = require('../models/user.model');
const History = require('../models/history.model');
const historyService = require('../services/history.service');




const getHistoryList = (req, res) => {

    History.find({userId: req.user.id}, {weatherData: false}, function (err, histories) {
        if (err) return res.status(500).send({
            message: err.message,
        })
        // saved!
        res.status(200).send(histories)
    });
}

const getHistoryElement = (req, res) => {
    // const userId = req.user.id;
    console.log('req.params', req.params)

    History.findById(req.params.id, function (err, histories) {
        if (err) return res.status(500).send({
            message: err.message,
        })
        // saved!
        res.status(200).send(histories)
    });
}


// getHistoryList
// getHistoryElement



const createHistory = async (req, res) => {
    console.log('register', req.body)
    try {
        const inputData = {
            ...req.body,
            userId: req.user.id
        }
        const result = await historyService.addHistoryData(inputData);
        res.status(200).send(result);

    } catch (err) {
        res.status(500).send({ message: err.message })
    }

    // res.status(200).send({
    //     message: 'register'
    // });
}






// const writeHistoryData = (req, res) => {
//     // const userId = req.user.id;

//     History.create(req.user.id, function (err, users) {
//         if (err) return res.status(500).send({
//             message: 'Error'
//         })
//         // saved!
//         res.status(200).send(users)
//     });
// }


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
    createHistory,
    getHistoryList,
    getHistoryElement
}