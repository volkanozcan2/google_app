var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', { title: 'Express', rnd: [{ num: 123, tex: "deneme 1" }, { num: 234, tex: "deneme 2" }, { num: 456, tex: "deneme 3 " }] });
});

module.exports = router;