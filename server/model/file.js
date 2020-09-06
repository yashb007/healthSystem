const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Doctor = require('./doctor');
const User = require('./user');
const Lab = require('./laboratry');
const { ObjectId } = mongoose.Schema.Types


const reportSchema = mongoose.Schema({
    
    url:{
        type:String,
        required:true
    },
    user:{
        type : ObjectId,
        ref:"User",
        required:true
    },
    doctor:{
        type : ObjectId,
        ref:"Doctor"
    },
    lab:{
        type : ObjectId,
        ref:"Lab"
    }

})

module.exports = mongoose.model('Report', reportSchema);