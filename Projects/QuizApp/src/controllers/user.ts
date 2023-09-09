import { NextFunction, Request, Response } from 'express';
import User from '../models/user';
import bcrypt from 'bcryptjs';

interface returnResponse{
    status : "Success" | "Error";
    message : String,
    data : {}
}

const registerUser = async (req : Request,res : Response,next : NextFunction) => {
    let resp : returnResponse;
    try{
        const email = req.body.email;
        const name = req.body.name;
        const password = await bcrypt.hash(req.body.password,12);

        const user = new User({email,name,password});
        const result = await user.save();
        if(!result){
            resp = {status : "Error", message : "No result found", data : {}};
            res.send(resp);
        }
        else{
            resp = {status : "Success", message : "Registration done", data : {userId : result._id}};
            res.send(resp);
        }
    }
    catch(error){
        resp = {status : "Error", message : "Something went wrong", data : {}};
        res.send(resp);
    }
}

const loginUser = async (req : Request, res : Response, next : NextFunction) => {
    let resp : returnResponse
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await User.findOne({email});
        if(!user){
            resp = {status : "Error", message : "User not found", data : {}};
            res.status(401).send();
        }
        else{
            const status = await bcrypt.compare(password,user.password);
            if(status){
                resp =  {status : "Success", message : "Login successful",data : user};
                res.status(200).send(resp);
            }
            else{
                resp = {status : "Error", message : "Credentials do not match", data : {}};
                res.send(resp);
                res.status(401).send();
            }
        }
    } 
    catch(error){
        console.log(error);
        resp = {status : "Error", message : "Something went wrong", data : {}};
        res.send(resp);
    }
}

const getUser = async (req : Request, res : Response) => {
    let resp : returnResponse;
    try{
        const userId = req.params.userId;
        const user = await User.findById(userId,{name : 1,email : 1});
        if(!user){
            resp = {status : "Error", message : "Something went wrong",data : {}};
            res.send(resp);
        }
        else{
            resp =  {status : "Success", message : "User Found",data : user};
            res.send(resp);
        }
    } 
    catch(error) {
        console.log(error);
        resp = {status : "Error", message : "Something went wrong",data : {}};
        res.status(500).send(resp);
    }
}

const updateUser = async (req : Request, res : Response) => {
    let resp : returnResponse;
    try {
        const userId = req.body._id;
        const user = await User.findById(userId);

        if(!user){
            resp = {status : "Error", message : "Something went wrong",data : {}};
            res.send(resp);
        }
        else{
            user.name = req.body.name;
            await user.save();
            resp =  {status : "Success", message : "User Updated",data : {}};
            res.send(resp);
        }
    } 
    catch(error) {
        console.log(error);
        resp = {status : "Error", message : "Something went wrong",data : {}};
        res.status(500).send(resp);
    }
}

export {registerUser, getUser , updateUser , loginUser};