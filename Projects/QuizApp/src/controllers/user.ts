import { NextFunction, Request, Response } from 'express';
import User from '../models/user';
import ProjectError from '../../helper/error';

interface returnResponse{
    status : "Success" | "Error";
    message : String,
    data : {} | []
}

const getUser = async (req : Request, res : Response, next : NextFunction) => {
    let resp : returnResponse;
    console.log(req.userId);
    try{
        const userId = req.params.userId;

        if(req.userId != req.params.userId){
            const err = new ProjectError("User not authorised");
            err.statuscode = 401;
            throw err;
        }

        const user = await User.findById(userId,{name : 1,email : 1});
        if(!user){
            const err = new ProjectError("User does not exist");
            err.statuscode = 401;
            throw err;
        }
        else{
            resp =  {status : "Success", message : "User Found",data : user};
            res.status(200).send(resp);
        }
    } 
    catch(error) {
        next(error);
    }
}

const updateUser = async (req : Request, res : Response, next : NextFunction) => {
    let resp : returnResponse;
    try {
        if(req.userId != req.body._id){
            const err = new ProjectError("User not authorised");
            err.statuscode = 401;
            throw err;
        }

        const userId = req.body._id;
        const user = await User.findById(userId);

        if(!user){
            const err = new ProjectError("User does not exist");
            err.statuscode = 401;
            throw err;
        }
        else{
            user.name = req.body.name;
            await user.save();
            resp =  {status : "Success", message : "User Updated",data : {}};
            res.send(resp);
        }
    } 
    catch(error) {
        next(error);
    }
}

export {getUser , updateUser};