var express = require('express');
var router = express.Router();
var auth = require('../config/isUser');
var order =  require.main.require('./models/order-model');
var rupiah = require('rupiah-format');

router.get('/', auth,function(req,res) {
    var data = {
        id_user: req.session.userId
    };

    order.orderListByKonfirmasi(data,function(result) {
        if(result && result!=null) {
            res.render('../views/order',{result: result, rupiah: rupiah});
        } else {
            res.render('');
        }
    });

});

router.get('/diproses', auth,function(req,res) {
    var data = {
        id_user: req.session.userId
    };

    order.orderListByProses(data,function(result) {
        if(result && result!=null) {
            res.render('../views/orderproses',{result: result, rupiah: rupiah});
        } else {
            res.render('');
        }
    });

});

router.get('/dikirim', auth,function(req,res) {
    var data = {
        id_user: req.session.userId
    };

    order.orderListByKirim(data,function(result) {
        if(result && result!=null) {
            res.render('../views/orderkirim',{result: result, rupiah: rupiah});
        } else {
            res.render('');
        }
    });

});

router.get('/diterima', auth,function(req,res) {
    var data = {
        id_user: req.session.userId
    };

    order.orderListByTerima(data,function(result) {
        if(result && result!=null) {
            res.render('../views/orderterima',{result: result, rupiah: rupiah});
        } else {
            res.render('');
        }
    });

});

router.post('/dikirim', auth, function(req,res) {
    var data = {
        status: req.body.status,
        id_order: req.body.id_order
    };

    order.konfirmasi(data, function(valid){
        if (valid) {
            res.redirect('/order/diterima');
        } else {
            res.redirect('');
        }
    })
});
module.exports = router;