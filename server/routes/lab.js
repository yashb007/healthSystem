const express = require('express');
const { check, body } = require('express-validator/check');
const router = express.Router();
const Hospital = require('../model/hospital');


const hospital = require('../controller/hospital');


router.get('/login', hospital.getLogin);

router.get('/signup', hospital.getSignup);

router.post('/login', [
    body('password', 'Password has to be valid.')
        .isLength({ min: 5 })
        .isAlphanumeric()
        .trim()
], hospital.postLogin);

router.post('/signup', [
    check('email')
        .custom((value, { req }) => {
            return Hospital.findOne({ email: value }).then(HospitalDoc => {
                if (HospitalDoc) {
                    return Promise.reject(
                        'Hospital exists already.'
                    );
                }
            });
        }),
    body(
        'password',
        'Please enter a password with only numbers and text and at least 5 characters.'
    )
        .isLength({ min: 5 })
        .isAlphanumeric()
        .trim()
   
        
], hospital.postSignup);

router.post('/logout', hospital.postLogout);

module.exports = router;