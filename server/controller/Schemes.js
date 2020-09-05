const Scheme = require('../model/Schemes')


exports.getSchemeById = (req,res,next,id) => {
    Scheme.findById(id).exec((err,scheme) => {
        if(err || !scheme){
            return res.status(400).json({
                error : "No Schemes  found in db"
            })
        }
        req.scheme = scheme;
        next()
    })
}

exports.addScheme = (req,res) => {
    const {name , launchDate , descripton , incomeBarrier,link , benifits } = req.body
    const scheme = new Scheme({
        name , launchDate , descripton , incomeBarrier,link , benifits
    })
    scheme.save().then((err,result) => { 
         if(err){
           return res.json(err)
         }
         return  res.json("scheme added")
            }        )
}

exports.showAllSchemes = (req,res) => {
    Scheme.findAll().exec((err,result) => {
        if(err){
                return res.json({err})
        }
        return res.json({result})
    })
}