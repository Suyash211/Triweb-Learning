import express from 'express';
import mongoose from 'mongoose';

import userRoute from './routes/user';
import authRoute from './routes/auth';

const app = express();

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
