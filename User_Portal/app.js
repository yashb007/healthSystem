const express=require('express');
const app=express();
const key=require('./config/keys');
const bodyParser=require('body-parser');
const passport=require('passport');
const mongoose=require('mongoose'); 
const flash=require('connect-flash');
const session=require('express-session');
const auth=require('./config/auth');
const keys = require('./config/keys');
require('./config/passport-setup-local')(passport);
const Hospital=require('./models/hospital');

mongoose.connect(key.mongodb.dbURI,{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())

app.use(express.static('public'))

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}))

app.use(passport.initialize());
app.use(passport.session());


app.use(flash());

app.use((req,res,next)=>{
  res.locals.success_msg=req.flash('success_msg');
  res.locals.error =req.flash('error');
  res.locals.chat=req.user;
  next();
})

app.get('/',(req,res)=>{
  res.redirect('/user/login');
})

app.use('/user',require('./routes/user-routes'));


app.get('/api/users',(req,res)=>{
  res.json(req.user);
})

const PORT=process.env.PORT || 4000;

const server=app.listen(PORT,function(){
  console.log(`running on port number ${PORT}`);
});
