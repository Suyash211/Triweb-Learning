import { NextFunction, Request, Response } from 'express';
import User from '../models/user';

interface returnResponse{
    status : "Success" | "Error";
    message : String,
    data : {}
}

const getUser = async (req : Request, res : Response) => {
    let resp : returnResponse;
    console.log(req.userId);
    try{
        const userId = req.params.userId;

        if(req.userId != req.params.userId){
            const err = new Error("User not authorised");
            throw err;
        }

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
        if(req.userId != req.body._id){
            const err = new Error("User not authorised");
            throw err;
        }

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

export {getUser , updateUser};