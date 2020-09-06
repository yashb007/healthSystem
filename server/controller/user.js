const User = require('../model/user');
const Hospital = require('../model/hospital');
const Doctor = require('../model/doctor');
const Prescription = require('../model/prescription');
const { v4: uuidv4 } = require('uuid');
const axios = require('axios');
const messagebird = require('messagebird')('3hXe6Ng7LdChjrn3NYjXio4w4');

exports.getCheckup = (req, res, next) => {
    const healthid = req.params.healthid;

    User.findOne({ healthid: healthid })
        .then(user => {

        })
}


exports.getUserById = (req, res, next, id) => {
    User.findById(id).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "No User  found in db"
            })
        }
        req.user = user;
        next()
    })
}

exports.getUserbyHealthId = (req, res,next) => {
    User.findOne({ healthid: req.body.healthid }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: "No User  found "
            }
            )
        }
        req.user = user;
         return res.json(req.user)
    })
}

exports.registerUser = (req, res) => {
    const { name, dob, aadhaar, state, district, Tehsil, address , contact, url } = req.body

    const privateKey = uuidv4();

    var resp = () => {
        s4 = () => {
            let characters = '1234567890';
            var charactersLength = characters.length;
            var result = ''
            for (var i = 0; i < 4; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }
        return s4() + '-' + s4() + '-' + s4() + '-' + s4();
    }
    const healthid = resp();
    const user = new User({
        name,
        dob,
        aadhaar,
        state,
        district,
        Tehsil,
        address,
        privateKey,
        healthid,
        contact,
        url
    });
    user.save().then(result => {
        return res.json({result})
    }).catch(err => 
        console.log(err))
};

exports.healthCard = (req, res, next) => {
    const healthid = req.body.healthid;
    let quickresponse =null;

    axios.get('https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=' + healthid)
        .then(qr => {
            quickresponse = qr;
            return (
                res.json({ quickresponse })
            )
        })
        .catch(err => {
            console.log(err);
        })
};



exports.sendOtp = (req,res) => {
    var number = req.user.contact;
    messagebird.verify.create(number, {
        originator : 'Code',
        template : 'Your verification code is ' + token
    }, function (err, response) {
        if (err) {
            console.log(err);
        } else {
            console.log(response);
            res.render('step2', {
                id : response.id
            });
}
    })}

exports.verifyOtp = (req,res) => {
    var id = req.body.id;
    var token = req.body.token;
    messagebird.verify.verify(id, token, function(err, response) {
      if (err) {
        console.log(err);
       return res.json({"verify":false})
      } else {
        console.log(response);
       return res.json({"verify":true})
      }
    });
}

//some bug in idea, yet to be discussed & resolved