import express from 'express';
import userRoute from './routes/user';

const app = express();

app.use(express.json());

app.get('/',(req,res) => {
    res.send("Hello");
});

app.use('/user',userRoute);

app.listen(3000);