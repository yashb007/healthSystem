module.exports = (req, res, next) => {
    if (!req.session.isLoggedIn) {
      //redirection to login page
    }
    next();
}
