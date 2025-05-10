import express from 'express';
import authRouters from './routes/auth.route.js';
import dodtenv from 'dotenv';
import cookieParser from 'cookie-parser';
import {connectDB} from './lib/db.js';

dodtenv.config();
const app = express();
const PORT = process.env.PORT
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouters)

app.listen(5001, () => {
  console.log("Server is running on PORT:" + PORT);
  connectDB()
});