module.exports = (req, res, next) => {
    if (!req.session.userLoggedIn) {
        //redirecting to login page
    }
    next();
}