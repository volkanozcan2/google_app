var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', rnd: ~~(Math.random() * 1000) });
});

module.exports = router;