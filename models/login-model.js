var db = require('./db');
var hashPass = require('password-hash');

var login = function(data,callback) {
    var sql = "SELECT * FROM user WHERE email=?";
    var parameter = [data.email];

    db.getData(sql,parameter,function(result) {
        if (result.length == 0) {
            callback(false);
        } else {
            if (hashPass.verify(data.password, result[0].password)) {
                callback(result);
            } else {
                callback(false);
            }
        }
    });
}

module.exports.login = login;