const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schemesSchema = mongoose.Schema({
   name:{
       type : String,
       required : true
   },
   launchDate:{
       type:Date,
       required : true
   },
});

module.exports = mongoose.model('Schemes', schemesSchema);