const bcrypt = require('bcryptjs');
const { validationresult } = require('express-validator/check');
const Laboratry = require('../model/laboratry');
const Doctor = require('../model/doctor')

exports.getLabById = (req,res,next,id) => {
    Laboratry.findById(id).exec((err,lab) => {
        if(err || !hos){
            return res.status(400).json({
                error : "No laboratry  found in db"
            })
        }
        req.laboratry = lab;
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
     
 const {name,state,district,Tehsil,address,type,totalBedsCount,OccupiedBedsCount,head,lab,Contact,photo,password }  = req.body

    
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
         res.json(doctorKey)
     }).catch(err => {
         console.log(err)
     })
} 

exports.listDoctors = (req,res) => {
    Doctor.find({hospital : req.hospital.id}).then(list =>{
        res.json({list})
    }).catch(err => console.log(err))
}

exports.updateHospInfo = (req,res) => {
    const {totalBedsCount,OccupiedBedsCount,head,lab,Contact,photo }  = req.body

    Hospital.findByIdAndUpdate(req.hospital._id, {$set : {totalBedsCount,OccupiedBedsCount,head,lab,Contact,photo }}, {new : true},
        (err,result) =>{
           if(err){
            return res.status(422).json({error:"Updation Failed"})
           }
           res.json({result, message:"Updation done "} )
        } )
}