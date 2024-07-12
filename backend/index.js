import express from 'express';
import dotenv from 'dotenv'; //It loads environment variables from a .env file
import cookieParser from 'cookie-parser'; //It is a middleware which parses cookies attached to the client request object.
import cors from 'cors';
import { userRoute } from './routes/userRoutes.js';
import { residencyRoute } from './routes/residencyRoutes.js';

dotenv.config()

const app = express();
const PORT = process.env.PORT ||3000;

// Middleware
app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
});

app.use('/api/user',userRoute)
app.use('/api/residency',residencyRoute)