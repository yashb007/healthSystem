const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const labSchema = new Schema({
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
    head: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    Contact: {
        type: String,
        required: true
    },
    Photo: {
        type: Buffer,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tests:[
        {
            type : String
        }
    ]
});

module.exports = mongoose.model('Lab', labSchema);
