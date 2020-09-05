const bcrypt = require('bcryptjs');
const { validationresult } = require('express-validator');
const User = require('../model/user');


exports.getLogin = (req, res, next) => {
    // showing the Login Page
};

exports.getSignup = (req, res, next) => {
    // showing the signup page
};

exports.postLogin = (req, res, next) => {

    const healthid = req.body.healthid;
    const password = req.body.password;

    User.findOne({ healthid: healthid })
        .then(user => {
            bcrypt.compare(password, user.password)
                .then(match => {
                    if (match) {
                        req.session.userLoggedIn = true;
                        req.session.user = user;
                        return req.session.save(err => {
                            console.log(err);
                            //redirecting page
                        });
                    }

                    //redirecting again to login page if not matched
                })
                .catch(err => {
                    console.log(err);
                    //redirecting to login page
                });
        })
        .catch(err => {
            console.log(err);
            //redirecting to login page
        });
};

exports.postSignup = (req, res, next) => {
    const name = req.body.name;
    const dob = req.body.dob;
    const aadhaar = req.body.aadhaar;
    const healthid = req.body.healthid;
    const state = req.body.state;
    const district = req.body.district;
    const tehsil = req.body.tehsil;
    const address = req.body.address;
    const password = req.body.password;

    bcrypt.hash(password, 12)
        .then(hashedpwd => {
            const user = new User({
                name: name,
                dod: dob,
                aadhaar: aadhaar,
                healthid: healthid,
                state: state,
                district: district,
                tehsil: tehsil,
                address: address,
                password: hashedpwd
            });
            return user.save();
        })
        .then(result => {
            //redirect to login page
        })
        .catch(err => {
            console.log(err);
        })
};

exports.postLogout = (req, res, next) => {
    req.session.destroy(err => {
        console.log(err);
        //redirecting to hommepage
    });
};