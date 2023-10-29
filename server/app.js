const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const session = require('express-session');
const helmet = require("helmet")
const unauthorizedRouter = require('./routes/unauthorized')
const authorizedRouter = require('./routes/authorized')
const User = require("./model/User");

require('./config/db');

const secret = "3f1a8e678a4b6a4dc925c18c9a4c2b4a"

const app = express();

app.use(logger('dev'));
app.use(express.json({limit: '1mb'}));
app.use(express.urlencoded({ limit: '1mb', extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}))
app.use(session({
    secret: secret,
    resave: false,
    saveUninitialized: false
}));
app.use(cookieParser(secret));
app.use(helmet())

app.use('/', unauthorizedRouter);
app.use('/secure', authorizedRouter)

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    const isValidPassword = await user.comparePassword(password);

    if (!isValidPassword) {
        return res.status(401).json({ message: 'Invalid username or password' });
    }

    req.session.user = {role: user.role};

    res.send();
});

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: 'Error logging out' });
        }
        res.send();
    });
});

app.get('/currentUserRole', async (req, res) => {
    if (req.session.user){
        const userRole = req.session.user.role;
        res.json({role: userRole});
    } else {
        res.json({role: undefined});
    }
});

app.get('/isAuthorized', async (req, res) => {
    if (req.session.user){
        res.json({isAuthorized: true});
    } else {
        res.json({isAuthorized: false});
    }
});

module.exports = app;
