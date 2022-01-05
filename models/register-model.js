var db = require('./db');
var hashPass = require('password-hash');

var validasi = function(data,callback) {
    var sql = "INSERT INTO `user`(`nama_user`, `email`, `jenis_kelamin`, `alamat`, `no_tlp`, `password`) VALUES (?,?,?,?,?,?)";
    var parameter = [data.nama_user,data.email,data.jenis_kelamin,data.alamat,data.no_tlp,hashPass.generate(data.password)];

    db.insertData(sql,parameter,function(result){
        if(result == null) {
            callback(false);
        } else {
            callback(true);
        }
    });
}
module.exports.validasi = validasi;