const User = require('../model/user');
const Hospital = require('../model/hospital');
const { v4: uuidv4 } = require('uuid');

exports.getCheckup = (req, res, next) => {
    const healthid = req.params.healthid;

    User.findOne({ healthid: healthid })
        .then(user => {

        })
}


exports.getUserById = (req,res,next,id) => {
    User.findById(id).exec((err,user) => {
        if(err || !user){
            return res.status(400).json({
                error : "No User  found in db"
            })
        }
        req.user = user;
        next()
    })
}

exports.getUserbyHealthId = (req,res) =>{
    User.findOne({healthid : req.body.healthid}, (err,user) => {
        if(err || !user){
            return res.status(400).json({
                error : "No User  found "
        }
            )}
        req.user = user   
})
}

exports.registerUser = (req,res) => {
const {name,dob,aadhaar,state,district,Tehsil,address} = req.body
   
     const privateKey = uuidv4();  
     
    var resp = () =>{
        s4 = () => {
            let characters = '1234567890';
            var charactersLength = characters.length;
            var result = ''
            for ( var i = 0; i < 4; i++ ) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
             }
             return result;
        }
        return s4( ) + '-' + s4( ) + '-' + s4()+ '-' + s4();
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
            healthid
        })

}



//some bug in idea, yet to be discussed & resolved