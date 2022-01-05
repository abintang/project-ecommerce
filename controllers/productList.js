var express = require('express');
var router = express.Router();
var product = require.main.require('./models/product-model');
var wishlist = require.main.require('./models/wishlist-model');
var cart =  require.main.require('./models/cart-model');
var auth = require('../config/isUser');
var rupiah = require('rupiah-format');

router.get('/',function(req,res) {
    product.productList(function(result) {
        if(result && result!=null) {
            if(req.session.loggedUser != null) {
                res.render('../views/user/product',{result: result, rupiah: rupiah});
            } else {
                res.render('../views/product',{result: result, rupiah: rupiah});
            }
            } else {
                res.render('');
            }
    });
});

router.all('/product',function(req,res) {
    product.productList(function(result) {
        if(result && result!=null) {
            if(req.session.loggedUser != null) {
                res.render('../views/user/product',{result: result, rupiah: rupiah});
            } else {
                res.render('../views/product',{result: result, rupiah: rupiah});
            }
            } else {
                res.render('');
            }
    });
});

router.all('/tanaman',function(req,res) {
    product.productTanaman(function(result) {
        if(result && result!=null) {
            if(req.session.loggedUser != null) {
                res.render('../views/user/productcategory',{result: result, rupiah: rupiah});
            } else {
                res.render('../views/productcategory',{result: result, rupiah: rupiah});
            }
            } else {
                res.render('');
            }
    });
});

router.all('/bibit',function(req,res) {
    product.productBibit(function(result) {
        if(result && result!=null) {
            if(req.session.loggedUser != null) {
                res.render('../views/user/productcategory',{result: result, rupiah: rupiah});
            } else {
                res.render('../views/productcategory',{result: result, rupiah: rupiah});
            }
            } else {
                res.render('');
            }
    });
});

router.all('/productdetails/:id?', function(req,res) {
	var data = {
		id: req.params.id
	};
	product.productDetails(data,function(result) {
	 	if(result && result!=null) {
             if (req.session.loggedUser != null) {
                res.render('../views/user/productdetails',{result: result, rupiah: rupiah});
             } else {
	 		res.render('../views/productdetails',{result: result, rupiah: rupiah});
            }
	 	} else {
	 		res.render('');
	 	}
	 });
});

router.all('/addwishlist/:id?', auth,function(req,res){
    var data = {
        id_user: req.session.userId,
        id: req.params.id
    };
    wishlist.addToWishlist(data, function(valid){
        if (valid) {
            res.redirect('/wishlist');
        } else {
            res.redirect('product');
        }
    });
});

router.all('/addtocart/:id?', auth, function(req, res) {
    var harga = req.body.harga;
    var quantity = req.body.quantity;
    var data = {
        id_user: req.session.userId,
        id: req.params.id,
        quantity: req.body.quantity,
        total_harga: harga * quantity
    };
    cart.addToCart(data, function(valid){
        if (valid) {
            res.redirect('/cart');
        } else {
            res.redirect('product');
        }
    });
});

module.exports = router;