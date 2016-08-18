var express = require('express');
var router = express.Router();
var user = require('../database/db').user;

//用户列表
router.get('/',function(req, res) {
    res.send('respond with a resource');
});
module.exports = router;