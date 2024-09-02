import jwt from "jsonwebtoken";
import appConfigs from "../config.js";
import { ObjectId } from "mongoose";

export const generateAuthToken = (id)=> {
    return jwt.sign({_id: id},appConfigs.SECRET_KEY);
}