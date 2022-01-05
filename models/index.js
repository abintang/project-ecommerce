var db = require('./db');

module.exports = {
    productListByPopular: function(callback) {
		var sql = "SELECT * FROM product WHERE popular LIKE 'Yes'";
		db.getAllData(sql,function(result) {
			if(result==null) {
				callback(false);
			} else {
				callback(result);
			}
		});
	},

};