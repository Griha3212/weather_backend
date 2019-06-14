var express = require('express');
var AuthController = require('../controllers/auth.controller');
var HistoryController = require('../controllers/history.controller');
var router = express.Router();
// /api/checkLogin
router.get('/checkLogin', AuthController.checkLogin);

// GET /api/history
router.get('/history', HistoryController.getUserInfo);
module.exports = router;