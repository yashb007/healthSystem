const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const controller = require('../controller/hospital')

router.post('/signup',controller.signup)



module.exports = router