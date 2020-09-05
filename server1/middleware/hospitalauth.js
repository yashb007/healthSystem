module.exports = (req, res, next) => {
    if (!req.session.hospitalLoggedIn) {
        //redirecting to login page
    }
    next();
}