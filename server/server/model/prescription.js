const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Hospital = require('./hospital');
const Doctor = require('./doctor');
const Patient = require('./user');

const prescriptionSchema = new Schema({
    name_of_hospital: {
        type: String,
        ref: "Hospital"
    },
    name_of_patient: {
        type: String,
        ref: "Patient"
    },
    age_of_patient: {
        type: Number,
        required: true
    },
    date_of_consultation: {
        type: Date,
        required: true
    },
    medicine_name: [
        {
            type: String
        }
    ],
    strength_of_medicine: [
        {
            type: String
        }
    ],
    dose_of_medicine: [
        {
            type: String
        }
    ],
    duration_of_medicine: [
        {
            type: String
        }
    ],
    doctor_key: {
        type: String,
        ref: "Doctor"
    }
});

module.exports = mongoose.model('Prescription', prescriptionSchema);