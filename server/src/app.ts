import express,{Express} from "express";
import cors from "cors"
import router from "./routes/index.js";

const app:Express = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.raw());
app.use(express.text());

app.use(cors({
    origin:'*'
}))

app.use('/api',router);

export default app;