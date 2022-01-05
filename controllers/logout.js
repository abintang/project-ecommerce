var express = require('express');
var router = express.Router();
var auth = require('../config/isUser');

router.get('/', auth, function(req,res){
    req.session.destroy(function(){
  });
    res.redirect('/login');
});

module.exports = router;