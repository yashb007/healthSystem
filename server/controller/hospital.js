const mongoose = require('mongoose');

const Hospital = require('../model/hospital')

exports.signup = () => {
    const {name , state , district , Tehsil , address , type , totalBedsCount ,head , lab , contact , email , password , photo } = req.body;
    const hospital = new Hospital({
        name , state , district , Tehsil , address , type , totalBedsCount ,head , lab , contact , email , password , photo
    })

    hospital.save().then((hos) => {
          return res.json(hos)
    })
}