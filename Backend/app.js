import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import'dotenv/config';
import router from './src/routes/AuthRoutes.routes.js';
import { errorHandler } from './src/middlewares/errorHandler.js';

const app = express();


app.use(cors({
    origin:process.env.FRONTEND_URL || "http://localhost:5173 ",
    method:['POST', 'GET'],
      credentials: true,
    optionsSuccessStatus : 200,
    allowedHeaders:['content-Type','Authorization']
}));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth', router);

// Error handler must be LAST
app.use(errorHandler);

export {app}