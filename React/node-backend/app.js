const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const Product = require('./model/product');

app.use(cors());
app.use(express.json());

app.get('/',(req,res) => {
    res.send("Hello Server");
})

app.post('/product',async (req,res) => {
    try {
        const result = await Product.create(req.body);
        res.send({status : 'success'});
    } 
    catch(error) {
        console.log(error.message);
        res.send({status:'error',message:error.message})
    }
})

const connectionString = process.env.connectionString || "";

async function connectDb(){
    try {
        await mongoose.connect(connectionString);
        app.listen(process.env.PORT);
    } catch (error) {
        console.log(error);
    }
}

connectDb();
app.listen(3002);