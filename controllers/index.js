var express=require('express');
var router=express.Router();
var index = require.main.require('./models/index');
var user =  require.main.require('./models/user-model');
var rupiah = require('rupiah-format');

router.all('/',function(req,res) {
    if (req.session.loggedUser != null) {
        var email = req.session.loggedUser;
            var data = {
                email : email
            };
            user.user(data,function(result){
            if(result && result!=null) {
            if(typeof result!=='undefined') {
                for (var i=0 ; i<result.length ; i++) {
                    req.session.userId = result[i].id_user;
                 }
            }
            } else {
                req.session.userId = null;
            }
            });
    }
    index.productListByPopular(function(result) {
        if(result && result!=null) {
                if(req.session.loggedUser != null) {
                    res.render('../views/user/index',{result: result, rupiah: rupiah});
                } else {
                    res.render('../views/index',{result: result, rupiah: rupiah});
                }
            } else {
                res.render('');
            }
    });
});



module.exports = router;