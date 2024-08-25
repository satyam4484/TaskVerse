import dotenv from 'dotenv';
dotenv.config();

interface AppConfigs {
    MONGO_URL: string | undefined;
    PORT: number | undefined;
}

const appConfigs: AppConfigs = {
    MONGO_URL: process.env.MONGO_URL,
    PORT: parseInt(process.env.PORT)
};

export default appConfigs;