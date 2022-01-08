module.exports = function (req, res, next) {
    if (!req.session.loggedUser) {
      res.redirect('/login?error=' + encodeURIComponent('Incorrect_Credential'));
    } else {
      next();
    }
};

