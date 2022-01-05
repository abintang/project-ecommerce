var express = require('express');
var router = express.Router();
var wishlist = require.main.require('./models/wishlist-model');
var auth = require('../config/isUser');
var rupiah = require('rupiah-format');

 //router.get('/',function(req,res) {
   // res.render('../views/wishlist');
// });
router.get('/', auth,function(req,res) {
    var email = req.session.loggedUser;
    var data = {
       email : email
        
    };
    wishlist.wishlistList(data,function(result) {
        if(result && result!=null) {
            res.render('../views/wishlist',{result: result, rupiah: rupiah});
        } else {
            res.render('');
        }
    });
});

router.all('/removewishlist/:id_wishlist&:id?', auth,function(req,res){
    var data = {
        id: req.params.id,
        id_user: req.session.userId,
        id_wishlist: req.params.id_wishlist
    };
    wishlist.wishlistDelete(data, function(valid){
        if (valid) {
            res.redirect('/wishlist');
        } else {
            res.redirect('wishlist');
        }
    });
});

module.exports = router;
