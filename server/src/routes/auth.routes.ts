import { Router } from "express";
import {authenticateUser, logoutUser} from "../controllers/auth.controller.js"
import passport from "../middlewares/auth.middleware.js";
const router = Router();

// router.post('/google',passport.authenticate("google", { scope: ["profile", "email"] }));  // middle ware
router.get('/google/callback',passport.authenticate('google',{
    failureRedirect: "/auth/google/failed",
}),(req: any,res) => {
    console.log("inside this-----",req.user);
    
    res.redirect(`http://localhost:5173?user`)
});  
router.get('/google/login',authenticateUser);
router.get('/google/logout',logoutUser);


export default router;