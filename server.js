import express from "express";
import * as dotenv from 'dotenv';
import mongoose from "mongoose";
import productRouter from "./routes/productsRouter.js";
import cors from 'cors'

dotenv.config();
const app = express();
mongoose.connect(process.env.MONGO_DB);
console.log('successfully connect to mongodb!');
app.listen(process.env.PORT, () => {
    console.log('Running the server on the port 8080!')
});
app.use(cors({origin: 'http://localhost:3000'}))
app.use('/products', productRouter);
