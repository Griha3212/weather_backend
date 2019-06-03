var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//создаём схему БД

var userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: String,
    password: String,
    createdAt: { type: Date, default: Date.now }
    // title:  String,
    // author: String,
    // body:   String,
    // comments: [{ body: String, date: Date }],
    // date: { type: Date, default: Date.now },
    // hidden: Boolean,
    // meta: {
    //     votes: Number,
    //     favs:  Number
    // }
});


//создаём БД с использованием схемы
const User = mongoose.model('User', userSchema);


//экспорт для доступа извне
module.exports = User;