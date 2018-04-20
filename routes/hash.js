var express = require('express');
var router = express.Router();
var crypto = require("crypto");
/* GET home page. */
function sha(x) {
    return crypto.createHash('sha256').update(x).digest("hex");
}
router.get('/', function(req, res, next) {
    res.render('hash', { title: 'Hasher' });
});
router.post('/', function(req, res, next) {
    res.render('hash', { title: sha(req.body.sample) });
});

module.exports = router;