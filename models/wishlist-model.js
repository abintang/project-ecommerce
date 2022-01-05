db = require('./db');


module.exports = {
    wishlistList: function (data,callback) {
        // var sql = "SELECT * FROM wishlist INNER JOIN user ON wishlist.id_user = user.id_user INNER JOIN product ON wishlist.id = product.id";
        var sql = "SELECT * FROM wishlist INNER JOIN user ON wishlist.id_user = user.id_user INNER JOIN product ON wishlist.id = product.id WHERE email=? ";
        var param = [data.email];

        db.getData(sql,param,function(result) {
			if(result==null) {
				callback(false);
			} else {
				callback(result);	
			}
		});
    },

    addToWishlist: function (data, callback) {
        var sql = "INSERT INTO `wishlist`(`id_user`, `id`) VALUES (?,?)";
        var parameter = [data.id_user, data.id];

        db.insertData(sql,parameter,function(result){
            if(result == null || result.length == 0) {
                callback(false);
            } else {
                callback(true);
            }
        });
    },
    wishlistDelete: function(data,callback) {
		var sql="DELETE FROM `wishlist` WHERE id = ? AND id_user = ? AND id_wishlist = ?";
		var param=[data.id, data.id_user, data.id_wishlist];

		db.deleteData(sql,param,function(result) {
			if(result==null) {
				callback(false);
			} else {
				callback(true);
			}
		});
	}
}