const express = require('express');
const { check, body } = require('express-validator/check');
const User = require('../model/user');
const router = express.Router();
const authController = require('../controller/auth');


router.get('/login', authController.getLogin);

router.get('/signup', authController.getSignup);

router.post('/login', [
    body('password', 'Password has to be valid.')
        .isLength({ min: 5 })
        .isAlphanumeric()
        .trim()
], authController.postLogin);

router.post('signup', [
    check('aadhaar')
        .custom((value, { req }) => {
            return User.findOne({ aadhaar: value }).then(userDoc => {
                if (userDoc) {
                    return Promise.reject(
                        'Aadhar exists already.'
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
        .trim(),
    body('confirmPassword')
        .trim()
        .custom((value, { req }) => {
            if (value !== req.body.password) {
                throw new Error('Passwords have to match!');
            }
            return true;
        })
], authController.postSignup);

router.post('/logout', authController.postLogout);


module.exports = router;
