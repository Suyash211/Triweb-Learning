import { NextFunction, Request, Response } from 'express';
import User from '../models/user';

interface returnResponse{
    status : "Success" | "Error";
    message : String,
    data : {}
}

const registerUser = async (req : Request,res : Response,next : NextFunction) => {
    let resp : returnResponse;
    try{
        const user = new User(req.body);
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

export {registerUser};