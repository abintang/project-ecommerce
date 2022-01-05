var express = require('express');
var router = express.Router();

router.get('/', function(req,res){
    if (req.session.loggedUser != null) {
        res.render('../views/user/about');
    } else {
        res.render('../views/about');
    }
});

module.exports = router;