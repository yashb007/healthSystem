const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hospitalSchema = new Schema({
    hpname: {
        type: String,
        required: true
    },
    hpaddress: {
        type: String,
        required: true
    },
    hptype: {
        type: String,
        required: true
    },
    hpbeds: {
        type: Number,
        required: true
    },
    hpcategory: {
        type: String,
        required: true
    },
    hphead: {
        type: String,
        required: true
    },
    hpstore: {
        type: Boolean,
        required: true
    },
    hplab: {
        type: Boolean,
        required: true
    }
});

module.exports = mongoose.model('Hospital', hospitalSchema);