import passport from "passport";
import appConfigs from "../config.js";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { generateAuthToken } from "../utils/services.js";

import User from "../models/user.model.js";

async function setUser(accessToken,refreshToken,profile,done) {
    const existingUser = await User.findOne({ googleId: profile.id });
    if (existingUser) {
        console.log("exisint user found---",existingUser);
        const token = generateAuthToken(existingUser._id);
        const user = {
            token
        }
        return done(null, user);
    }else{
        console.log("new user created--",profile._json);
        return done(null, profile._json);
    }
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