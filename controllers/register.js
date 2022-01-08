var express = require('express');
var router = express.Router();
var registerValidation = require.main.require('./validation/regUser');
var register = require.main.require('./models/register-model');
var async = require('async-validator');
var authOn = require('../config/alreadyOn');

router.get('/', authOn,function(req,res) {
    res.render('../views/register');
});

router.post('/', function(req,res) {
    var data = {
        nama_user: req.body.nama_user,
		email: req.body.email,
        jenis_kelamin: req.body.jenis_kelamin,
        alamat: req.body.alamat,
		no_tlp: req.body.no_tlp,
		password: req.body.password
    };
    var validator = new async(registerValidation.registrasi);
    validator.validate(data, function(errors, fields) {

        console.log(errors);
        console.log(fields);

        if (errors) {
            res.render('register', {errors: errors});
        } else {
            if (req.body.password == req.body.repassword) {
                register.validasi(data, function(valid){
                    if(valid) {
                        res.redirect('/login');
                    } else {
                        res.render('../views/register', {errorMessage:'Email yang dimasukan telah terdaftar'});
                    }
                });
            } else {
                res.render('../views/register', {errorMessage:'Repeat Password yang dimasukan tidak sesuai'});
            }
        }
    });
});

module.exports = router;