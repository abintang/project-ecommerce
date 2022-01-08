var db = require('./db');
var hashPass = require('password-hash');

module.exports = {
    adminLogin : function(data,callback) {
        var sql = "SELECT * FROM admin WHERE username=?";
        var parameter = [data.username];
    
        db.getData(sql,parameter,function(result) {
            if (result.length==0) {
                callback(false);
            } else {
                if (hashPass.verify(data.password, result[0].password)) {
                    callback(result);
                } else {
                    callback(false);
                }
            }
        });
    },

    userList: function (callback){
        var sql = "SELECT * FROM user"
        db.getAllData(sql,function(result) {
            if(result==null) {
                callback(false);
            } else {
                callback(result);
            }
        });
    },

    orderListByKonfirmasi: function(callback) {
		var sql = "SELECT * FROM orderuser INNER JOIN user ON orderuser.id_user = user.id_user INNER JOIN product ON orderuser.id = product.id WHERE status LIKE 'Menunggu Konfirmasi'";
		db.getAllData(sql, function(result) {
			if(result==null) {
				callback(false);
			} else {
				callback(result);
			}
		});
	},

    orderListByProses: function(callback) {
		var sql = "SELECT * FROM orderuser INNER JOIN user ON orderuser.id_user = user.id_user INNER JOIN product ON orderuser.id = product.id WHERE status LIKE 'Diproses'";
		db.getAllData(sql, function(result) {
			if(result==null) {
				callback(false);
			} else {
				callback(result);
			}
		});
	},

    orderListByKirim: function(callback) {
		var sql = "SELECT * FROM orderuser INNER JOIN user ON orderuser.id_user = user.id_user INNER JOIN product ON orderuser.id = product.id WHERE status LIKE 'Dikirim'";
		db.getAllData(sql, function(result) {
			if(result==null) {
				callback(false);
			} else {
				callback(result);
			}
		});
	},

    orderListByTerima: function(callback) {
		var sql = "SELECT * FROM orderuser INNER JOIN user ON orderuser.id_user = user.id_user INNER JOIN product ON orderuser.id = product.id WHERE status LIKE 'Diterima'";
		db.getAllData(sql, function(result) {
			if(result==null) {
				callback(false);
			} else {
				callback(result);
			}
		});
	},

	tambahProduct: function(data,callback) {
		var sql = "INSERT INTO `product`(`nama_product`, `harga`, `keterangan`, `kategori`, `foto`) VALUES (?,?,?,?,?)";
    	var parameter = [data.nama_product,data.harga,data.keterangan,data.kategori,data.foto];

    	db.insertData(sql,parameter,function(result){
        	if(result == null) {
            	callback(false);
        	} else {
           	 callback(true);
        	}
    	});
	},
}