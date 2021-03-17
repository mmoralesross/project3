const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const db = require("../models");

passport.use(
    new LocalStrategy(
        {
            usernameField: "email"
        },
        (email, password, done) => {
            db.UserData.findOne({email:email})
                .then(dbUser => {
                    if(!dbUser) {
                        console.log("Incorrect email");
                        return done(null, false, {message: "Incorrect email"});
                    } else if (!dbUser.validPassword(password)) {
                        console.log("Incorrect password");
                        return done(null, false, {message: "Incorrect passord"});
                    }
                    return done(null, dbUser);
                });
        }
    )
);

passport.serializeUser((user, cb) => {
    cb(null, user);
});

passport.deserializeUser((obj, cb) => {
    cb(null, obj);
});

module.exports = passport;