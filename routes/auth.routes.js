var express = require('express');
var AuthController = require('../controllers/auth.controller');
var router = express.Router();

// /auth/register
router.post('/register', AuthController.register);
// router.get('/users', AuthController.CheckAllUsers);
router.post('/login', AuthController.login);


module.exports = router;