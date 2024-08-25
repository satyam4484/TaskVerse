
import mongoose from "mongoose";
import logging from "./utils/logging.js";
import appConfigs from "./config.js";
import app from "./app.js";

logging.info("Starting the application...");

const connectToDatabase = async ():Promise<void> => {
    try {
        logging.warn("Attempting to connect to the database...");
        await mongoose.connect(appConfigs.MONGO_URL);
        logging.success("Database connected successfully.");
    } catch (error) {
        logging.error("Failed to connect to the database.", error);
        throw error;
    }
};

const startServer = ():void => {
    app.listen(appConfigs.PORT, () : void => {
        logging.info(`Server is running and listening on port ${appConfigs.PORT}`);
    });
};

const initializeApp = async () : Promise<void> => {
    try {
        await connectToDatabase();
        startServer();
        logging.success("Application started successfully.");
    } catch (error) {
        logging.error("Application startup failed.", error);
    }
};

initializeApp();

export default app;