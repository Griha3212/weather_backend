
//Подключение модулей
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
// var session = require('express-session');


var app = express();
app.use(cors());

//Использование парсера для тела запроса
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

//подключение сессий
// app.use(session({
//   secret: 'work hard',
//   resave: true,
//   saveUninitialized: false
// }));

//Подключение
// // models
// require('./models/user.model');


// routes
var apiRoutes = require('./routes/api.routes');

app.use('/api', apiRoutes);




// app.get('/users', function (req, res) {
//   User.find({}, function (err, users) {
//     if (err) return res.status(500).send({
//       message: 'Error'
//     })
//     // saved!
//     res.status(200).send(users)
//   });
// });


//Примеры запросов








// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });

// app.get('/cats', function (req, res) {
//   Cat.find({}, function (err, cats) {
//     if (err) return res.status(500).send({
//       message: 'Error'
//     })
//     // saved!
//     res.status(200).send(cats)
//   });
// });

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

// app.post('/cats', function(req, res) {

//   // req.body
//   // req.query
//   // req.params

//   console.log('req.body', req.body);
//   // return res.send('ok==');
//     Cat.create(req.body, function (err, newCat) {
//       if (err) return res.status(500).send({
//         message: 'Error'
//       })
//       // saved!
//       res.status(200).send(newCat)
//     });
// })

// app.put('/cats/:_id', function(req, res) {
//   console.log('req.params', req.params);
//   console.log('req.body', req.body);
//   // return res.send('ok==');

//   Cat.updateOne(req.params, req.body, function(err, cat) {
//     if (err) return res.status(500).send({
//       message: 'Error'
//     })
//     // saved!
//     res.status(200).send(cat)
//   });
// })

// app.delete('/cats/:_id', function (req, res) {
//   console.log('req.params', req.params)
//   Cat.deleteOne(req.params, function (err) {
//     if (err) return res.status(500).send({
//       message: 'Error'
//     })
//     // saved!
//     res.status(200).send({
//       message: `id ${req.params._id} has been deleted`
//     })
//   });
// });


//коннектим монгуса))
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});


var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('mongodb connected');

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});