const path = require('path');

const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//const csrf = require('csurf');
//const flash = require('connect-flash');

const app = express();
const store = new MongoDBStore({
    uri: 'mongodb+srv://root:9755@cluster0.n1q9f.mongodb.net/health',
    collection: 'sessions'
})

//const csrfProtection = csrf();


app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(bodyParser.urlencoded({ extended: false }));

app.use(
    session({
        secret: 'very very secret key it is',
        resave: false,
        saveUninitialized: false,
        store: store
    })
);

//app.use(csrfProtection);
//app.use(flash());


app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn;
    // res.locals.csrfToken = req.csrfToken();
    next();
});

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const hspRoutes = require('./routes/hospital');

app.use('/user', userRoutes);                  //for user information routes will be - /user/something*
app.use('/auth', authRoutes);                  //for user authentication routes will be - /auth/something*
app.use('/hsp', hspRoutes);                    //for hospital authentication routes will be - /hsp/something*
app.use('/lab', labRoutes);                    //for hospital authentication routes will be - /hsp/something*


mongoose.connect("mongodb+srv://root:9755@cluster0.n1q9f.mongodb.net/health?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("DB CONNECTED");
        app.listen(process.env.port || 8080);
    })
    .catch(err => {
        console.log("OOOPS NOT CONNECTED", err);
    });
//6oGsJUbNFKXUie00