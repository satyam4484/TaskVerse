import express,{Express} from "express";
import cors from "cors"
import session from 'express-session';
import router from "./routes/index.js";
import appConfigs from "./config.js";
import passport from "./middlewares/auth.middleware.js";
import authRouter from "./routes/auth.routes.js"

const app:Express = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.raw());
app.use(express.text());
app.use(
    session({
        secret: appConfigs.SECRET_KEY, // Replace with your own secret key
        resave: false, // Prevents resaving session if it hasn't been modified
        saveUninitialized: false, // Prevents saving uninitialized session
        cookie: { secure: false }, // Set to true if using HTTPS
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: 'http://localhost:5173', // Specify the frontend origin explicitly
    credentials: true,
}))

app.use('/api',router);
app.use('/auth',authRouter);

export default app;