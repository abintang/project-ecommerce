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
module.exports = router;