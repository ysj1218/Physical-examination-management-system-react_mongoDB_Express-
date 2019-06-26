var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '教职工体检管理信息系统' });
});

module.exports = router;
