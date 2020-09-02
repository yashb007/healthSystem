const User = require('../model/user');
const Hospital = require('../model/hospital');

exports.getCheckup = (req, res, next) => {
    const healthid = req.params.healthid;

    User.findOne({ healthid: healthid })
        .then(user => {

        })
}



//some bug in idea, yet to be discussed & resolved