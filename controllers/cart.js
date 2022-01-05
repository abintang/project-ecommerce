var express=require('express');
var router=express.Router();
var cart = require.main.require('./models/cart-model');
var order =  require.main.require('./models/order-model');
var rupiah = require('rupiah-format');
var auth = require('../config/isUser');

router.get('/', auth,function(req,res) {
    var email = req.session.loggedUser;
    var data = {
       email : email
        
    };
    cart.cartList(data,function(result) {
        if(result && result!=null) {
            res.render('../views/cart',{result: result, rupiah: rupiah});
        } else {
            res.render('');
        }
    });
});

router.all('/removecart/:id_cart&:id?', auth,function(req,res){
    var data = {
        id: req.params.id,
        id_user: req.session.userId,
        id_cart: req.params.id_cart
    };
    cart.cartDelete(data, function(valid){
        if (valid) {
            res.redirect('/cart');
        } else {
            res.redirect('cart');
        }
    });
});

router.post('/', auth, function(req, res) {
    var data = {
        id_user: req.session.userId
    };
    order.addToOrder(data, function(valid){
        if (valid) {
            cart.cartAllDelete(data, function(valid){
                if (valid) {
                    res.redirect('/order');
                } else {
                    res.redirect('cart');
                }
            })
        } else {
            res.redirect('cart');
        }
    });
})

module.exports = router;