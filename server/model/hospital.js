const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const hospitalSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    Tehsil: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['Government', 'Private','Semi Government']
    },
    totalBedsCount: {
        type: Number,
        required: true
    },
    OccupiedBedsCount: {
        type: Number,
        required: true
    },
    totalVentiCount: {
        type: Number,
      
    },
    OccupiedVentiCount: {
        type: Number,
      
    },
    email:{
        type: String,
        required: true
    },
    head: {
        type: String,
        required: true
    },
    Contact: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required : true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Hospital', hospitalSchema);
