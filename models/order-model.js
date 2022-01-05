db = require('./db');

module.exports = {
    addToOrder: function (data, callback) {
        var sql = "INSERT INTO `orderuser`(`id_user`, `id`, `quantity`, `total_harga`) SELECT id_user, id, quantity, total_harga FROM `cart` WHERE id_user =?";
        var parameter = [data.id_user];

        db.insertData(sql,parameter,function(result){
            if(result == null) {
                callback(false);
            } else {
                callback(true);
            }
        });
    },

    orderListByKonfirmasi: function(data, callback) {
		var sql = "SELECT * FROM orderuser INNER JOIN user ON orderuser.id_user = user.id_user INNER JOIN product ON orderuser.id = product.id WHERE status LIKE 'Menunggu Konfirmasi' AND orderuser.id_user=?";
        var param = [data.id_user];
		db.getData(sql, param, function(result) {
			if(result==null) {
				callback(false);
			} else {
				callback(result);
			}
		});
	},

    orderListByProses: function(data, callback) {
		var sql = "SELECT * FROM orderuser INNER JOIN user ON orderuser.id_user = user.id_user INNER JOIN product ON orderuser.id = product.id WHERE status LIKE 'Diproses' AND id_user=?";
        var param = [data.id_user];
		db.getData(sql, param, function(result) {
			if(result==null) {
				callback(false);
			} else {
				callback(result);
			}
		});
	},

    orderListByKirim: function(data, callback) {
		var sql = "SELECT * FROM orderuser INNER JOIN user ON orderuser.id_user = user.id_user INNER JOIN product ON orderuser.id = product.id WHERE status LIKE 'Dikirim' AND id_user=?";
        var param = [data.id_user];
		db.getData(sql, param, function(result) {
			if(result==null) {
				callback(false);
			} else {
				callback(result);
			}
		});
	},

    orderListByTerima: function(data, callback) {
		var sql = "SELECT * FROM orderuser INNER JOIN user ON orderuser.id_user = user.id_user INNER JOIN product ON orderuser.id = product.id WHERE status LIKE 'Diterima' AND id_user=?";
        var param = [data.id_user];
		db.getData(sql, param, function(result) {
			if(result==null) {
				callback(false);
			} else {
				callback(result);
			}
		});
	}

}