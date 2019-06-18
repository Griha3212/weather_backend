var express = require('express');
var AuthController = require('../controllers/auth.controller');
var HistoryController = require('../controllers/history.controller');
var router = express.Router();
// /api/checkLogin
router.get('/checkLogin', AuthController.checkLogin);

// GET /api/history
router.get('/history', HistoryController.getHistoryList);
router.get('/history/:id', HistoryController.getHistoryElement);

router.post('/history', HistoryController.createHistory);
router.get('/profile/', AuthController.getUserInfo);

module.exports = router;


// GET             /history - get list
// GET             /history/:id - get single history element
// POST            /history - create new history
// PUT/PATH/POST   /history/:id - edit history
// DELETE          /history/:id - delete history