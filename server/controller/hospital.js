const bcrypt = require('bcryptjs');
const { validationresult } = require('express-validator/check');
const Hospital = require('../model/hospital');
const Doctor = require('../model/doctor')

exports.getLogin = (req, res, next) => {
    // showing the Login Page
};

exports.getSignup = (req, res, next) => {
    // showing the signup page
};

exports.postLogin = (req, res, next) => {

    const {hospitalid , password } = req.body
    Hospital.findOne({ hospitalid })
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
     
 const {name,state,district,Tehsil,address,type,totalBedsCount,OccupiedBedsCount,head,lab,Contact,photo,hospitalid,password }  = req.body

    
    bcrypt.hash(password, 12)
        .then(hashedpwd => {
            const hospital = new Hospital({
                name,
                state,
                district,
                Tehsil,
                address,
                type,
                totalBedsCount,
                OccupiedBedsCount,
                head,
                lab,
                Contact,
                hospitalid,
                password: hashedpwd,
                photo
            });
            return hospital.save();
        })
        .then(result => {
            console.log("Hospital registered")
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

exports.addDoctor = (req,res) => {
    const {name , field , qualification  } = req.body;
    var result = '';
    var characters  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$?';
    for ( var i = 0; i < 8; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
     }

     bcrypt.hash(result , 12).then(hashedKey => {
         const doctor = new Doctor({
             name ,
             field , 
             qualification , 
             key = hashedKey
         })
         return doctor.save()
     }).then(result => {
         res.json("Doctor Added")
     }).catch(err => {
         console.log(err)
     })
} 



exports.listDoctors = (req,res) => {
    Doctor.find({hospital : req.hospital.id}).then(list =>{
        res.json({list})
    }).catch(err => console.log(err))
}