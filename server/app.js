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

require('dotenv').config({ path: path.join(__dirname, '.env') });
require('./config/db');

const app = express();

app.use(logger('dev'));
app.use(express.json({limit: '1mb'}));
app.use(express.urlencoded({ limit: '1mb', extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set("trust proxy", 1);
app.use(cors({
    origin: process.env.CLIENT_HOST,
    credentials: true,
}))
app.use(cookieParser(process.env.SESSION_SECRET_KEY));
app.use(session({
    secret: process.env.SESSION_SECRET_KEY,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax"
    }
}));
app.use(helmet({
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: false,
    crossOriginOpenerPolicy: false
}))

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

    req.session.user = {role: user.role, username: user.username};

    req.session.save(err => {
        if (err) {
            console.error("❌ Session save failed:", err);
            return res.status(500).json({ message: "Session error" });
        }
        res.json({
            message: "Login successful",
            role: user.role,
            username: user.username
        });
    });
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
    if (req.session.user) {
        const userRole = req.session.user.role;
        res.json({role: userRole});
    } else {
        res.json({role: undefined});
    }
});

app.get('/currentUsername', async (req, res) => {
    if (req.session.user) {
        const username = req.session.user.username;
        res.json({username: username});
    } else {
        res.json({username: undefined});
    }
});

app.get('/isAuthorized', async (req, res) => {
    if (req.session.user) {
        res.json({isAuthorized: true});
    } else {
        res.json({isAuthorized: false});
    }
});

module.exports = app;
