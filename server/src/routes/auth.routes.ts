import { Router } from "express";
import {authenticateUser, logoutUser} from "../controllers/auth.controller.js"
import passport from "../middlewares/auth.middleware.js";
const router = Router();

// router.post('/google',passport.authenticate("google", { scope: ["profile", "email"] }));  // middle ware
router.get('/google/callback',passport.authenticate('google',{
    successRedirect: '/auth/google/login',
    failureRedirect: "/auth/google/failed",
}));  
router.get('/google/login',authenticateUser);
router.get('/google/logout',logoutUser);


export default router;