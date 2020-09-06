const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user = new Schema({
    name: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    aadhaar: {
        type: String,
        required: true
    },
    healthid: {
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
    privateKey: {
        type: String,
        required: true
    },
    password: {
        type: String,
    },
    medical: {
        info: []
    }
});
module.exports = mongoose.model('user', user);