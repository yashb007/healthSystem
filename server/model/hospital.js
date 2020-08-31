const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const doctorSchema = mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    field:{
        type: String,
        required: true
    },
    Qualification:{
        type: String,
        required: true
    },
    contact:{
        type: String,
        required: true
    }
})

const hospitalSchema = new Schema({
    name: {
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
        enum:['Government','Private']
    },
    doctorList:[doctorSchema],

    totalBedsCount: {
        type: Number,
        required: true
    },
    OccupiedBedsCount:{
        type: Number,
        required: true
    },
    head: {
        type: String,
        required: true
    },
    lab: {
        type: Boolean,
        required: true
    },
    Contact:{
        type: String,
        required: true
    },
    Photo : {
        type: Buffer,
        required: true
    }
});

module.exports = mongoose.model('Hospital', hospitalSchema);
module.exports = mongoose.model('Doctor', doctorSchema);