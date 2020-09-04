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
        enum: ['Government', 'Private']
    },
    totalBedsCount: {
        type: Number,
        required: true
    },
    OccupiedBedsCount: {
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
    }
});

module.exports = mongoose.model('Hospital', hospitalSchema);
