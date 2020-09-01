const path = require('path');

const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const csrf = require('csurf');
const flash = require('connect-flash');

const app = express();
const store = new MongoDBStore({
    uri: 'mongodb+srv://yash:6oGsJUbNFKXUie00@cluster0.zjc3f.mongodb.net/test',
    collection: 'sessions'
})

const csrfProtection = csrf();

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const hspRoutes = require('./routes/hospital');


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
    session({
        secret: 'very very secret key it is',
        resave: false,
        saveUninitialized: false,
        store: store
    })
);

app.use(csrfProtection);
app.use(flash());


app.use((req, res, next) => {
    res.locals.isAuthenticated = req.session.isLoggedIn;
    res.locals.csrfToken = req.csrfToken();
    next();
});

app.use('/user', userRoutes);
app.use('/auth', authRoutes);
app.use('/hsp', hspRoutes);


mongoose.connect("mongodb+srv://yash:6oGsJUbNFKXUie00@cluster0.zjc3f.mongodb.net/<dbname>?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("DB CONNECTED");
        
    })
    .catch(err => {
        console.log("OOOPS NOT CONNECTED", err);
    });
//6oGsJUbNFKXUie00