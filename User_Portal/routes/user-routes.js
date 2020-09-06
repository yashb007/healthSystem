const router=require('express').Router();
const app=require('express')();
const bcrypt=require('bcrypt');
const User=require('../models/user');
const passport=require('passport');
const auth=require('../config/auth');
const Hospital=require('../models/hospital');

router.get('/login',auth.User.revauthCheck,(req,res)=>{
  res.render('login-customer');
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/user/dashboard',
    failureRedirect: '/user/login',
    failureFlash :true
  })(req, res, next);
});



router.get('/profile-update',auth.User.authCheck,(req,res)=>{
  res.render('profileUpdate-user',{user:req.user});
});


router.get('/dashboard',auth.User.authCheck,(req,res)=>{
  Hospital.find({}).then((data)=>{
    res.render('dashboard-user',{hospitals : data})
  })
})


router.get('/schemes',auth.User.authCheck,(req,res)=>{
  Hospital.find({}).then((data)=>{
    res.render('user-schemes',{hospitals : data})
  })
})

router.get('/profile',auth.User.authCheck,(req,res)=>{
  res.render('user-profile',{user : req.user});
})


router.get('/history',auth.User.authCheck,(req,res)=>{
  res.render('history-user');
})


router.get('/logout',(req,res)=>{
  req.logOut();
  req.flash('success_msg','You are now successfully logout');
  res.redirect('/user/login');
});


module.exports = router;