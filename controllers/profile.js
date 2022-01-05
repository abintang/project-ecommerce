var express = require('express');
var router = express.Router();
var auth = require('../config/isUser');
var user =  require.main.require('./models/user-model');
var async = require('async-validator');
var editValidation = require.main.require('./validation/editUser');

router.get('/', auth,function(req,res){
    var email = req.session.loggedUser;
    var data = {
        email : email
    };
    user.user(data, function(result){
        if(result && result!=null) {
            res.render('../views/profile',{result: result});
        } else {
            res.render('');
        }
    });
});

router.get('/edituser', auth, function(req,res) {
    var email = req.session.loggedUser;
    var data = {
        email : email
    };
    user.user(data, function(result){
        if(result && result!=null) {
            res.render('../views/profileedit',{result: result});
        } else {
            res.render('');
        }
    });
});

router.post('/edituser', auth, function(req,res) {
    var data = {
        nama_user: req.body.nama_user,
        jenis_kelamin: req.body.jenis_kelamin,
        alamat: req.body.alamat,
		no_tlp: req.body.no_tlp,
		email: req.session.loggedUser
    };

    var validator = new async(editValidation.editUser);
    validator.validate(data, function(errors, fields) {

    console.log(errors);
    console.log(fields);
    if (errors) {
        res.render('../views/profileedit', {errors: errors});
    } else {
        user.editUser(data, function(valid){
            if(valid) {
                res.redirect('/profile');
            } else {
            }
        });
    }
    });
});

module.exports = router;

