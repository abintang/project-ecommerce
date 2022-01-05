module.exports = function (req, res, next) {
    if (req.session.loggedUser) {
        res.redirect('/');
    } else {
      next();
    }
};

