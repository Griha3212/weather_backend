const History = require('../models/history.model');

// const addHistoryData = (param) => {

//     return new Promise((resolve, reject) => {
//         User.findOne(param, function(err, user) {
//             if (err) {
//                 reject(err);
//             } else  {
//                 resolve(user)
//             }
//         }) 
//     })


// }



const addHistoryData = (inputData) => {
    return new Promise((resolve, reject) => {
        History.create(inputData, function(err, history) {
            console.log('err', err)
            console.log('user', history)
            if (err) {
                reject(err);
            } else  {
                resolve(history)
            }
        }) 
    })
}


const getList = (param) => {
    return new Promise((resolve, reject) => {
        History.find(param, function(err, history) {
            if (err) {
                reject(err);
            } else  {
                resolve(history)
            }
        }) 
    })
}


const getHistory = (param) => {
    return new Promise((resolve, reject) => {
        History.findOne(param, function(err, history) {
            if (err) {
                reject(err);
            } else  {
                resolve(history)
            }
        }) 
    })


}


module.exports = {  
    addHistoryData,
    getHistory,
    getList
}