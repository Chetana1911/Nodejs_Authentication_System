require('dotenv').config();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const crypto = require('crypto');
const User = require('../models/user');

// Tell passport to use the Google OAuth2 strategy
passport.use(new GoogleStrategy({
    // Details obtained from the Google Cloud Console
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK_URL,
}, async function (accessToken, refreshToken, profile, done) {
    // Find the email in the Database
    try {
        // Find a user based on their email in the profile
        const user = await User.findOne({ email: profile.emails[0].value }).exec();

        if (user) {
            // If found, set this as req.user
            return done(null, user);
        } else {
            // If not found, create the user and set it as req.user 
            const newUser = await

                User.create({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    password: crypto.randomBytes(20).toString('hex'),
                });
            return done(null, newUser);
        }
    } catch (err) {
        console.log("Error in Google strategy passport", err);
        return done(err, null);
    }
}));





















