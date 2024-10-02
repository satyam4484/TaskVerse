import { Response, NextFunction } from "express";
import User, { UserInterface } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import appConfigs from "../config.js";
import { sendResponse } from "../utils/responseHelper.js";
import { AuthenticatedRequest } from "../controllers/user.controller.js";

export default async function verifyToken(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<any> {
    try {
        const bearerHeader: string = req.headers['authorization'];

        if (typeof bearerHeader !== 'undefined') {
            const token: string = bearerHeader.split(" ")[1];

            const tokenVerify: any = await jwt.verify(token, appConfigs.SECRET_KEY);

            if (tokenVerify) {
                // Ensure the user fetched from the database is of the correct type
                const user = await User.findOne({ _id: tokenVerify._id }, { password: 0 }) as (UserInterface & { _id: string }) | null;

                if (user) {
                    req.user = user; // req.user is of type AuthenticatedRequest, which should include user
                    next();
                } else {
                    throw "User not found!";
                }
            } else {
                throw "Invalid Token!!!";
            }
        } else {
            throw "Token Not Found";
        }
    } catch (error) {
        return sendResponse(res, 400, "Error in checking user token", null, error);
    }
}