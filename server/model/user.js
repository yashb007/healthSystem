const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
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
        type: Schema.Types.ObjectId,
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
    password: {
        type: String,
        required: true
    },
    medical: {
        info: []
    }
});

module.exports = mongoose.model('User', userSchema);