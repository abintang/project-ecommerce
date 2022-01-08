var express = require('express');
var app = express();
var expressSession = require('express-session');
var bodyParser = require('body-parser');
var index = require('./controllers/index');
var product = require('./controllers/productList')
var register = require('./controllers/register');
var login =  require('./controllers/login');
var logout = require('./controllers/logout');
var wishlist = require('./controllers/wishlist');
var cart = require('./controllers/cart');
var about = require('./controllers/about');
var profile = require('./controllers/profile');
var order = require('./controllers/order');
var admin = require('./controllers/admin');
var { flash } = require('express-flash-message');
var port = 8000;
var path = require('path');

// middleware
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.get('/', function(req,res) {
    res.redirect('/index');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(expressSession({
    secret: 'rahasia',
    saveUninitialized: true,
    resave: false
}));
app.use(express.static(path.join(__dirname, './assets')));
app.use(flash({ sessionKeyName: 'flashMessage' }));

// route
app.use('/index', index);
app.use('/product', product);
app.use('/register', register);
app.use('/login', login);
app.use('/logout', logout);
app.use('/wishlist', wishlist);
app.use('/cart', cart);
app.use('/dlyplant', about);
app.use('/profile', profile);
app.use('/order', order);
app.use('/admin', admin);
// server
app.listen(port,function() {
    console.log('Server berjalan pada port ' + port + '.\nUntuk mengakses website ini dapat dilakukan dengan cara yaitu menuju http://localhost:'+port+'/ pada web browser.\nSebelum menggunakan website ini, dimohon untuk membaca panduan dan ketentuan penggunaan terlebih dahulu.');
})