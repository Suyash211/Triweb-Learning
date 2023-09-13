import express from 'express';
import { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

import userRoute from './routes/user';
import authRoute from './routes/auth';
import quizRoute from './routes/quiz';
import examRoute from './routes/exam';
import ProjectError from '../helper/error';

const app = express();

interface returnResponse{
    status : "Success" | "Error";
    message : String,
    data : {} | []
}

const connectionString = process.env.CONNECTION_STRING || "";

app.use(express.json());

declare global{
    namespace Express{
        interface Request{
            userId : String,
        }
    }
}

app.get('/',(req,res) => {
    res.send("Hello");
});

app.use('/user',userRoute);

app.use('/auth',authRoute);

app.use('/quiz',quizRoute);

app.use('/exam',examRoute);

app.use((err : ProjectError, req : Request, res : Response, next : NextFunction) => {
    let message : string;
    let statusCode : number;

    if(!!err.statuscode && err.statuscode < 500){
        message = err.message;
        statusCode = err.statuscode;
    }
    else{
        message = "Something went wrong please try after sometime!";
        statusCode = 500;
    }

    let resp : returnResponse = {status : "Error",message,data : {}};
    if(!!err.data){
        resp.data = err.data;
    }

    console.log(err.statuscode,err.message);
    res.status(statusCode).send(resp);
})

async function connectDb(){
    try {
        await mongoose.connect(connectionString);
        app.listen(process.env.PORT,() => {
            console.log("Server is running");
        });
    } catch (error) {
        console.log(error);
    }
}

connectDb();
