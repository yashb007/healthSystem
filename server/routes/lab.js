const express = require('express');
const { check, body } = require('express-validator/check');
const router = express.Router();
const Lab = require('../model/laboratry');


const lab = require('../controller/laboratry');


router.get('/login', lab.getLogin);

router.get('/signup', lab.getSignup);

router.post('/login', [
    body('password', 'Password has to be valid.')
        .isLength({ min: 5 })
        .isAlphanumeric()
        .trim()
], lab.postLogin);

router.post('/signup', [
    check('email')
        .custom((value, { req }) => {
            return Lab.findOne({ email:req.body.email }).then(HospitalDoc => {
                if (HospitalDoc) {
                    throw new Error('Lab Registered Already');
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
   
        
], lab.postSignup);

router.post('/logout', lab.postLogout);

//router.post('/addreport',lab.addreport)

module.exports = router;