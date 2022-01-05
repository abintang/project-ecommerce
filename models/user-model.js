var db = require('./db');

module.exports = {
    user: function (data, callback){
        var sql = "SELECT * FROM user WHERE email=?"
        var param = [data.email];
        db.getData(sql,param,function(result) {
            if(result==null) {
                callback(false);
            } else {
                callback(result);
            }
        });
    },
    editUser: function (data, callback) {
        var sql = "UPDATE `user` SET `nama_user`=?,`jenis_kelamin`=?,`alamat`=?,`no_tlp`=? WHERE `email`=?";
        var param = [data.nama_user, data.jenis_kelamin, data.alamat, data.no_tlp, data.email];

        db.updateData(sql,param,function(result){
			if(result==null) {
				callback(false);
			} else {
				callback(true);
			}
		});
    }
}