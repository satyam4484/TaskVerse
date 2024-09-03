import { Router } from "express";
import userRouter from "./user.routes.js"
import authRouter from "./auth.routes.js";
import dashboardRouter from "./dashboard.routes.js";
import verifyToken from "../middlewares/verifyToken.js";

const router = Router();


router.use('/user',userRouter);
router.use('/auth',authRouter);
router.use('/dashboards',verifyToken,dashboardRouter);

export default router;