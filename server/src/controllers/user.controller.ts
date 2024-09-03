import { Request, Response } from "express";
import User ,{UserInterface} from "../models/user.model.js";
import { sendResponse } from "../utils/responseHelper.js";
import logging from "../utils/logging.js";
import { generateAuthToken } from "../utils/services.js";

export interface AuthenticatedRequest extends Request {
    user?: Partial<UserInterface> // Adjust the type according to your user model
}

export const userExists = async (req: Request, res: Response) => {
    try{
        const data: Partial<UserInterface>= req.body;
        const user = await User.findOne({...data});
        if(user!==null) {
            return sendResponse(res,400,"User Exists.");
        }
        return sendResponse(res,200,"User not found.");
    }catch(error) {
        return sendResponse(res,400,"Error in checking user Exists",null,error);
    }
}

export const createUser = async (req: Request, res: Response) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        const token = generateAuthToken(savedUser._id);
        return sendResponse(res,201,"User created successfully",{token})
    } catch (error) {
        return sendResponse(res, 400, "Error creating user", null, error);
    }
};

export const getUser = async (req: AuthenticatedRequest, res: Response) => {
    try {
        logging.info("Getting User Details...");
        if (!req.user) {
            return sendResponse(res, 404, "User not found");
        }
        return sendResponse(res, 200, "User fetched successfully", req.user);
    } catch (error) {
        return sendResponse(res, 400, "Error fetching user", null, error);
    }
};

export const updateUserById = async (req: Request, res: Response) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { ...req.body, updated_at: Date.now() },
            { new: true, runValidators: true }
        );
        if (!updatedUser) {
            return sendResponse(res, 404, "User not found");
        }
        return sendResponse(res, 200, "User updated successfully", updatedUser);
    } catch (error) {
        return sendResponse(res, 400, "Error updating user", null, error);
    }
};

export const deleteUserById = async (req: Request, res: Response) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return sendResponse(res, 404, "User not found");
        }
        return sendResponse(res, 200, "User deleted successfully");
    } catch (error) {
        return sendResponse(res, 400, "Error deleting user", null, error);
    }
};