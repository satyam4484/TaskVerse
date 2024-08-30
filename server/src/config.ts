import dotenv from 'dotenv';
dotenv.config();

interface AppConfigs {
    MONGO_URL: string | undefined;
    PORT: number | undefined;
    SECRET_KEY: string | undefined;
    GOOGLE_CLIENT_ID: string | undefined;
    GOOGLE_CLIENT_SECRET: string | undefined;

}

const appConfigs: AppConfigs = {
    MONGO_URL: process.env.MONGO_URL,
    PORT: parseInt(process.env.PORT),
    SECRET_KEY: process.env.SECRET_KEY,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET
};

export default appConfigs;