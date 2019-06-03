var express = require('express');
var AuthController = require('../controllers/auth.controller')
var router = express.Router();

router.post('/register', AuthController.register);


module.exports = router;