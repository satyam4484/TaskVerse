import bcrypt from "bcryptjs";
import logging from "../utils/logging.js";
import userValidationSchema from "../validators/user.validator.js";

/**
 * Validates user data using Yup schema before saving to the database.
 */
async function validateUserData(this: any, next: Function): Promise<void> {
    try{
        logging.info("Validating user Data schema before insertion");
        logging.info(this.toObject())
        await userValidationSchema.validate(this.toObject(), { abortEarly: false });
        logging.success("User Data validation completed successfully");
    }catch(error) {
        next(new Error("User validation failed: " + error));
    }
    
}

/**
 * Hashes the user's password before saving to the database.
 */
async function hashUserPassword(this: any,next: Function): Promise<void> {
    try{
        logging.info("Hashing the password...");
        if(this.isModified("password")) {
            this.password = await bcrypt.hash(this.password,10);
            logging.success("Password hashing completed successfully.");
        }
    }catch(error) {
        next(new Error("User Password hashing failed: " + error.errors));
    }
}

/**
 * Middleware that validates user data and hashes the password before saving to the database.
 * 
 * @param next - Callback to the next middleware.
 */
async function userMiddleWare(this: any, next: Function): Promise<void> {
    try{
        // Call validateUserData and hashUserPassword with the correct context
        await validateUserData.call(this);
        // await hashUserPassword.call(this);
        next();
    }catch(error) {
        next(new Error("Middleware processing failed: " + error));
    }
}

export default userMiddleWare;