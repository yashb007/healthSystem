const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const Hospital = require('../model/hospital');
<<<<<<< HEAD
const Doctor = require('../model/doctor')
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')

const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key:"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"
    }
}))
=======
const Doctor = require('../model/doctor');
const session = require('express-session');
>>>>>>> 0c3974c80a1bfb84db7b90321e268a91633219fb

exports.getHospById = (req,res,next,id) => {
    Hospital.findById(id).exec((err,hos) => {
        if(err || !hos){
            return res.status(400).json({
                error : "No hospital  found in db"
            })
        }
        req.hospital = hos;
        next()
    })
}

exports.getLogin = (req, res, next) => {
    // showing the Login Page
};

exports.getSignup = (req, res, next) => {
    // showing the signup page
};

exports.postLogin = (req, res, next) => {
    const {email , password } = req.body
    
    Hospital.findOne({ email })
        .then(hospital => {
            if(!hospital){
                console.log("user not found");
                return;
            }
            bcrypt.compare(password, hospital.password)
                .then(match => {
                    if (!match) {
                        console.log("password not match");
                        return;
                    }
                    req.session.hospitalLoggedIn = true;
                    req.session.hospital = hospital;
                    console.log(req.session,45);
                    return req.session.save();
                }).then((data)=>{
                    res.json({login:true});
                })
                .catch(err => {
                    // console.log(err);
                    //redirecting to login page
                });
        })
        .catch(err => {
            console.log(err);
            //redirecting to login page
        });
};

exports.postSignup = (req, res, next) => {
     
<<<<<<< HEAD
 const {name,state,district,Tehsil,address,type,totalBedsCount,OccupiedBedsCount,totalVentiCount,OccupiedVentiCount,head,lab,email,Contact,photo,password}  = req.body

=======
 const {name,state,district,Tehsil,address,type,totalBedsCount,OccupiedBedsCount,head,lab,email,Contact,photo,password  }  = req.body
const errs=validationResult(req);
if(errs){
    res.json({validation:errs})
}
>>>>>>> 0c3974c80a1bfb84db7b90321e268a91633219fb
    
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
                email,
                password: hashedpwd,
                photo,
                totalVentiCount,
                OccupiedVentiCount
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


exports.updateHosInfo = (req,res) => {
    const {totalBedsCount,OccupiedBedsCount,totalVentiCount,OccupiedVentiCount,email,head,lab,Contact,photo }  = req.body

    Hospital.findByIdAndUpdate(req.hospital._id, {$set : {totalBedsCount,OccupiedBedsCount,totalVentiCount,OccupiedVentiCount,head,email,lab,Contact,photo }}, {new : true},
        (err,result) =>{
           if(err){
            return res.status(422).json({error:"Updation Failed"})
           }
           res.json({result, message:"Updation done "} )
        } )
}


exports.addDoctor = (req,res) => {
    const {name ,email , contact , field , qualification  } = req.body;
    var result = '';
    var characters  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$?';
    var charactersLength = characters.length;
    for ( var i = 0; i < 8; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
     }
      const doctorKey = result;
     bcrypt.hash(result , 12).then(hashedKey => {
         const doctor = new Doctor({
             name ,
             email,
             contact,
             field , 
             qualification , 
             key : hashedKey
         })
         return doctor.save()
     }).then(result => {
        transporter.sendMail({
            to:req.body.email,
            from:"bansaly37@gmail.com",
            subject:"Registration Completed",
            html:"<h1>Your private key is  </h1>"+ doctorKey
        })
         res.json(doctorKey)
     }).catch(err => {
         console.log(err)
     })
} 

exports.listDoctors = (req,res) => {
    Doctor.find({_id : req.hospital._id}).then(list =>{
        res.json({list})
    }).catch(err => console.log(err))
}

exports.showHosInfoById = (req,res) => {
    Hospital.findOne(req.hospital._id).exec((err,hos) => {
        if(err){
            return res.json("No hospital find")
        }
        return res.json({hos})
    } )
}