const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const Hospital = require('../model/hospital');
const Doctor = require('../model/doctor')
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')
const session = require('express-session');
const PDFDocument = require('pdfkit');
const path = require('path');
const fs = require('fs');

const transporter = nodemailer.createTransport(sendgridTransport({
    auth:{
        api_key:"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"
    }
}))

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
                    console.log(session);
                    return req.session.save(err => {
                        console.log(err);
                        //redirecting page
                    });
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
     
 const {name,state,district,Tehsil,address,type,totalBedsCount,OccupiedBedsCount,head,lab,email,Contact,url,password}  = req.body
const errs=validationResult(req);
if(errs){
    res.json({validation:errs})
}
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
                url
            });
            return hospital.save();
        })
        .then(result => {
            console.log(result);
            console.log("Hospital registered")
            res.json({msg  :"Hospital registered"})
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
    const {firstname,lastname ,email , contact , field , qualification  } = req.body;
    var result = '';
    var characters  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$?';
    var charactersLength = characters.length;
    for ( var i = 0; i < 6; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
     }
      const doctorKey = result;
     bcrypt.hash(result , 12).then(hashedKey => {
         const doctor = new Doctor({
            firstname,
            lastname ,
            email,
            contact,
            field , 
            qualification , 
            key : hashedKey
         })
         return doctor.save()
     }).then((err,result) => {
         
        transporter.sendMail({
            to:req.body.email,
            from:"awesomeraunakbhagat@gmail.com",
            subject:"Registration Completed",
            html:"<h1>Your private key is  </h1>"+ doctorKey
        })
        return res.json({"added" : true})
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

exports.verifyDoctor = (req,res) =>{
    const { email , key} = req.body;
 
    
    Doctor.findOne({ email })
        .then(doc => {
            if(!doc){
                console.log("doctor not found");
                return;
            }
            bcrypt.compare(key, hospital.key)
                .then(match => {
                    if (!match) {
                        console.log("Key not match");
                        return;
                    }
                    return res.json({"doctorVerify " :true})
                   // enable the submit button for prescription
                })
                .catch(err => {
                    console.log(err);
                });
        })
        .catch(err => {
            console.log(err);
        }); 
}


exports.getPrescription = (req, res, next) => {
    const hospitalname = req.body.hospitalname;
    const patientname = req.body.patientname;
    const age = req.body.age;
    const date = req.body.date;
    const medicine = req.body.medicine;
    const strength = req.body.strength;
    const dose = req.body.dose;
    const duration = req.body.duration;
    const key = req.body.key;

    const prescName = 'invoice' + date + patientname + '.pdf';
    const prescPath = path.join('data', 'invoices', prescName);
    const pdfDoc = new PDFDocument();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment;filename="' + prescName + '"');


    Doctor.find({ key: key })
        .then(key => {
            if (!key) {
                pdfDoc.pipe(fs.createWriteStream(prescPath));
                pdfDoc.pipe(res);
                pdfDoc.fontSize(30).text("PRESCRIPTION", {
                    underline: true
                });
                pdfDoc.text("___________________________________________________________________________");
                pdfDoc.fontSize(20).text(
                    "Medicine Name", "Strength", "Dose", "Duration"
                );
                pdfDoc.text("___________________________________________________________________________");

                pdfDoc.fontSize(15).text(
                    medicine, strength, dose
                );

                pdfDoc.text("____________________________________________________________________________");
                pdfDoc.text('Duration:' + duration);

                pdfDoc.fontSize(20).text('Hospital Name:' + hospitalname);
                pdfDoc.end();
            }

        })
        .catch(err => {
            console.log(err);
        });
}