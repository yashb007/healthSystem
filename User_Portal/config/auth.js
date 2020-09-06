module.exports={
  User:{
    authCheck : (req,res,next)=>{
      if(req.isAuthenticated()){
        next();
      }else{
        req.flash('error','Please login to view the data');
        res.redirect('/user/login');
      }
      },
    
      revauthCheck : (req,res,next)=>{
        if(req.isAuthenticated()){
          res.redirect('/user/dashboard');
        }else{
          next();
        }
      }
  }
  

}