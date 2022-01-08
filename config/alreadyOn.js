module.exports = function (req, res, next) {
    if (req.session.loggedUser) {
        res.redirect('/index?error=' + encodeURIComponent('Logout_Needed'));
    } else {
      next();
    }
};

