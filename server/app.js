const path = require('path');

const express = require('express');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const csrf = require('csurf');


const app = express();
const store = new MongoDBStore({
    uri: 'mongodb+srv://yash:6oGsJUbNFKXUie00@cluster0.zjc3f.mongodb.net/test',
    collection: 'sessions'
})

const csrfProtection = csrf();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
    session({
        secret: 'very very secret key',
        resave: false,
        saveUninitialized: false,
        store: store
    })
);

app.use(csrfProtection);


//6oGsJUbNFKXUie00
app.get('*', (req, res) => res.json({ working: "fine" }))
app.post('*', (req, res) => res.json({ working: "fine" }))


app.listen(PORT, () => {
    console.log(`Server is started at ${PORT}`)
})


mongoose.connect("mongodb+srv://yash:6oGsJUbNFKXUie00@cluster0.zjc3f.mongodb.net/<dbname>?retryWrites=true&w=majority", {
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
    })