import passport from "passport";
import appConfigs from "../config.js";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

import User from "../models/user.model.js";

async function setUser(accessToken,refreshToken,profile,done) {
    // const existingUser = await User.findOne({ password: profile.id });
    // console.log("exisint user found---",existingUser);
    // if (existingUser) {
    //     return done(null, existingUser);
    // }

    // const user = {
    //     password: profile.id,
    //     username: profile.displayName,
    //     email: profile.emails[0].value,
    //     avatar: profile.photos[0].value,
    // };
    console.log("new user created--",profile);
    done(null, profile);
}

passport.use(
    new GoogleStrategy({
        clientID:appConfigs.GOOGLE_CLIENT_ID,
        clientSecret:appConfigs.GOOGLE_CLIENT_SECRET,
        callbackURL:'http://localhost:8000/auth/google/callback',
        scope: ['profile', 'email']
    },setUser)
);

passport.serializeUser((user, done) => {
	done(null, user);
});

passport.deserializeUser((user, done) => {
	done(null, user);
});

export default passport;