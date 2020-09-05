const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Hospital = require('./hospital');
const { ObjectId } = mongoose.Schema.Types


const doctorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    field: {
        type: String,
        required: true
    },
    Qualification: {
        type: String,
        required: true
    },
    key: {
        type: String,
        required: true
    },
    hospital: {
        type: ObjectId,
        ref: "Hospital"
    }
})

module.exports = mongoose.model('Doctor', doctorSchema);