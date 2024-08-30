import { Request, Response } from "express"
import logging from "../utils/logging.js"
import { sendResponse } from "../utils/responseHelper.js";

export const authenticateUser = async(req: Request, res: Response) => {
    try{
        console.log(req);
        
        return sendResponse(res,201,"User Loggined Sucessfully");
    }catch(error){
        return sendResponse(res, 400, "Error while logging from google", null, error);
    }
}

export const logoutUser = async (req: Request, res: Response) => {
    try {
        logging.warn("Logging out user:", req.user);

        req.logout((err) => {
            if (err) {
                logging.error("Error during logout:", err);
                return sendResponse(res, 500, "Error during logout", null, err);
            }

            // Destroy the session
            req.session.destroy((err) => {
                if (err) {
                    logging.error("Error destroying session:", err);
                    return sendResponse(res, 500, "Error destroying session", null, err);
                }

                // Clear the session cookie
                res.clearCookie('connect.sid');
                return sendResponse(res, 200, "User logged out successfully");
            });
        });
    } catch (error) {
        logging.error("Unexpected error during logout:", error);
        return sendResponse(res, 500, "Unexpected error during logout", null, error);
    }
};