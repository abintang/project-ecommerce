var db = require('./db');

module.exports = {
    productList: function(callback) {
		var sql="SELECT * FROM product";
		db.getAllData(sql,function(result) {
			if(result==null) {
				callback(false);
			} else {
				callback(result);
			}
		});
	},

	productTanaman: function(callback) {
		var sql="SELECT * FROM product WHERE kategori LIKE 'Tanaman Hias'";
		db.getAllData(sql,function(result) {
			if(result==null) {
				callback(false);
			} else {
				callback(result);
			}
		});
	},

	productBibit: function(callback) {
		var sql="SELECT * FROM product WHERE kategori LIKE 'Bibit Tanaman Hias'";
		db.getAllData(sql,function(result) {
			if(result==null) {
				callback(false);
			} else {
				callback(result);
			}
		});
	},
	productDetails: function(data,callback) {
		var sql='SELECT * FROM product WHERE id=?';
		var param=[data.id];
			db.getData(sql,param,function(result) {
			if(result==null) {
				callback(false);
			} else {
				callback(result);	
			}
		});
	}
};