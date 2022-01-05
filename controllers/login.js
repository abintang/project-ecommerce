var express = require('express');
var async = require('async-validator');
var router = express.Router();
var login = require.main.require('./models/login-model');
var loginValidation = require.main.require('./validation/loginUser');
var authOn = require('../config/alreadyOn');

router.get('/',authOn,function(req,res){
    res.render('../views/login');
});

router.post('/',function(req,res){
    var data = {
        email: req.body.email,
        password: req.body.password
    };

    var validator = new async(loginValidation.login);
    validator.validate(data, function(errors){
        if(errors) {
            res.render('login', {errors: errors});
        } else {
            login.login(data, function(result){
                if(result) {
                    req.session.loggedUser = data.email;
                    res.redirect('/index');
                } else {
                    res.render('../views/login', {errorMessage:'Email atau Password salah'});
                }
            });
        }
    });
});

module.exports = router;