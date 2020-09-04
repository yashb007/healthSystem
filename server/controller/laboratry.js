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

    const {email , password } = req.body
    Laboratry.findOne({ email })
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
     
 const {name,state,district,Tehsil,address,head,email,Contact,photo,password }  = req.body

    
    bcrypt.hash(password, 12)
        .then(hashedpwd => {
            const lab = new Laboratry({
                name,
                state,
                district,
                Tehsil,
                address,
                head,
                email,
                Contact,
                password: hashedpwd,
                photo
            });
            return lab.save();
        })
        .then(result => {
            console.log("Lab registered")
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

exports.updateLabInfo = (req,res) => {
    const {head,email,Contact,photo }  = req.body

    Laboratry.findByIdAndUpdate(req.lab._id, {$set : {head,email,Contact,photo }}, {new : true},
        (err,result) =>{
           if(err){
            return res.status(422).json({error:"Updation Failed"})
           }
           res.json({result, message:"Updation done "} )
        } )
}

exports.showLabInfoById = (req,res) => {
    Laboratry.findOne(req.lab._id).exec((err,lab) => {
        if(err){
            return res.json("No lab find")
        }
        return res.json({lab})
    } )
}


exports.addTests = (req,res) => {
       const {test} = req.body;
       Laboratry.findByIdAndUpdate(req.lab._id,{
           $push :{ tests :test}
       }).exec((err,result) => {
           if(err){
            return res. status(422).json({error : err})
        }
        
         return res.json(result)
        
       })
}