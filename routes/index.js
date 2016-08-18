var express = require('express');
var router = express.Router();
var user = require('../database/db').user;

//主页
router.get('/',function(req, res) {
    res.render('index',{title : 'index'});
});
module.exports = router;
