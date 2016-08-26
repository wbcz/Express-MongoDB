var express = require('express');
var router = express.Router();
var userDao = require('../dao/userDao');

/* GET users listing. */
router.get('/', function(req, res, next) {
	userDao.index(req, res, next);
});
router.get('/addUser', function(req, res, next) {
	userDao.create(req, res, next);
});

// 增加用户
router.post('/addUser', function(req, res, next) {
    userDao.add(req, res, next);
});
router.get('/queryAll', function(req, res, next) {
    userDao.queryAll(req, res, next);
});
router.get('/updateUser', function(req, res, next) {
    userDao.update(req, res, next);
});
router.post('/updateUser', function(req, res, next) {
    userDao.upd(req, res, next);
});
router.get('/deleteUser', function(req, res, next) {
    userDao.delete(req, res, next);
});
router.post('/deleteUser', function(req, res, next) {
    userDao.del(req, res, next);
});
router.get('/test', function(req, res, next) {
    userDao.test(req, res, next);
});
module.exports = router;
