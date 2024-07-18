import express from "express";
import colors from 'colors';
import morgan from 'morgan';
import cors from 'cors';
import dotenv from 'dotenv';

import connectDB from "./config/db.js";

dotenv.config();

connectDB();


const app = express(); 

app.use(morgan("dev")  );
app.use(express.json());
app.use(cors());

//routes
import testRoutes from './routes/testRoutes.js';
import userRoutes from './routes/userRoutes.js';
app.use("/api/v1",testRoutes  )
app.use("/api/v1/user",userRoutes  )


app.get('/',(req,res)=> {
    return res.status(200).send('<h1>welcome</h1>');
});

const PORT = process.env.PORT || 8080

app.listen(PORT,()=> {
    console.log(`server runnning on port ${process.env.PORT} `.bgMagenta.white);
});  