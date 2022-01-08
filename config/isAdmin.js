module.exports = function (req, res, next) {
    if (!req.session.loggedAdmin) {
      res.redirect('/admin/login?error=' + encodeURIComponent('Incorrect_Credential'));
    } else {
      next();
    }
};

