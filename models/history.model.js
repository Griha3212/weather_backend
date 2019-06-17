var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//создаём схему БД

var historySchema = new Schema({
    userId: {
        type: String,
        required: true,
        // unique: true
    },
    weatherData:[{
        type: Object
    }],
    creationDate: { type: Date, default: Date.now },
    city: {type: String},
    // _id: { type: String },
});


//создаём модель с использованием схемы
const History = mongoose.model('History', historySchema);


//экспорт для доступа извне
module.exports = History;