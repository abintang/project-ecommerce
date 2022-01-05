db = require('./db');

module.exports = {
    cartList: function(data,callback) {
        var sql = "SELECT * FROM cart INNER JOIN user ON cart.id_user = user.id_user INNER JOIN product ON cart.id = product.id WHERE email=? ";
        var param = [data.email];

        db.getData(sql,param,function(result) {
			if(result==null) {
				callback(false);
			} else {
				callback(result);	
			}
		});
    },

	addToCart: function (data, callback) {
        var sql = "INSERT INTO `cart`(`id_user`, `id`, `quantity`, `total_harga`) VALUES (?,?,?,?)";
        var parameter = [data.id_user, data.id, data.quantity, data.total_harga];

        db.insertData(sql,parameter,function(result){
            if(result == null || result.length == 0) {
                callback(false);
            } else {
                callback(true);
            }
        });
    },

    cartDelete: function(data,callback) {
		var sql="DELETE FROM `cart` WHERE id = ? AND id_user = ? AND id_cart = ?";
		var param=[data.id, data.id_user, data.id_cart];

		db.deleteData(sql,param,function(result) {
			if(result==null) {
				callback(false);
			} else {
				callback(true);
			}
		});
	},

	cartAllDelete: function(data, callback) {
		var sql="DELETE FROM `cart` WHERE id_user = ?";
		var param=[data.id_user];

		db.deleteData(sql,param,function(result) {
			if(result==null) {
				callback(false);
			} else {
				callback(true);
			}
		});
	}
}