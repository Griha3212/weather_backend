var express = require('express');
var AuthController = require('../controllers/auth.controller');
var router = express.Router();

router.post('/register', AuthController.register);
router.get('/users', AuthController.CheckAllUsers);
router.get('/login', AuthController.login);


module.exports = router;