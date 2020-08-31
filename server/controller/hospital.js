const bcrypt = require('bcryptjs');
const { validationresult } = require('express-validator/check');
const Hospital = require('../model/hospital');


exports.getLogin = (req, res, next) => {
    // showing the Login Page
};

exports.getSignup = (req, res, next) => {
    // showing the signup page
};

exports.postLogin = (req, res, next) => {

    const hspid = req.body.hospitalid;
    const password = req.body.password;

    Hospital.findOne({ hospitalid: hspid })
        .then(hospital => {
            bcrypt.compare(password, hospital.password)
                .then(match => {
                    if (match) {
                        req.session.hospitalLoggedIn = true;
                        req.session.hospital = hospital;
                        return req.session.save(err => {
                            console.log(err);
                            //redirecting page
                        });
                    }
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

    const hspname = req.body.hspname;
    const address = req.body.address;
    const type = req.body.type;
    const bedcount = req.body.bedcount;
    const occupiedbeds = req.body.occupiedbeds;
    const head = req.body.head;
    const lab = req.body.lab;
    const contact = req.body.contact;
    const hspid = req.body.hospitalid;
    const password = req.body.password;
    const docname = req.body.docname;
    const field = req.body.field;
    const qualification = req.body.qualification;

    bcrypt.hash(password, 12)
        .then(hashedpwd => {
            const hospital = new Hospital({
                name: hspname,
                address: address,
                type: type,
                doctorList: {
                    DoctorInfo: [docname, field, qualification]
                },
                totalBedsCount: bedcount,
                OccupiedBedsCount: occupiedbeds,
                head: head,
                lab: lab,
                Contact: contact,
                hospitalid: hspid,
                password: hashedpwd
            });
            return hospital.save();
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