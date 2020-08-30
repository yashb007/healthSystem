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
    }
});

module.exports = mongoose.model('User', userSchema);