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
   description:{
        type : String,
        required : true
   },
   incomeBarrier:{
        type : String,
        required : true
   },
   link:{
        type : String,
        required : true
   },
   benifits:{
        type : String,
        required : true
   }

});

module.exports = mongoose.model('Schemes', schemesSchema);