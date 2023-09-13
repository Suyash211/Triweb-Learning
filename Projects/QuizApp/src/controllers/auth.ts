import { NextFunction, Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { validationResult } from 'express-validator';

import User from '../models/user';
import ProjectError from '../../helper/error';
import {returnResponse} from "../util/interfaces";

const registerUser = async (req : Request,res : Response,next : NextFunction) => {
    let resp : returnResponse;
    try{
        const validationError = validationResult(req);
        if(!validationError.isEmpty()){
            const err = new ProjectError("Validation failed");
            err.statuscode = 422;
            err.data = validationError.array();
            throw err;
        }
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
        next(error);
    }
}

const loginUser = async (req : Request, res : Response, next : NextFunction) => {
    let resp : returnResponse
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await User.findOne({email});
        if(!user){
            const err = new ProjectError("User not found");
            err.statuscode = 401;
            throw err;
        }
        else{
            const status = await bcrypt.compare(password,user.password);
            if(status){
                const token = jwt.sign({userId:user._id},"secretkey",{expiresIn : '1h'});
                resp =  {status : "Success", message : "Login successful",data : {token}};
                res.status(200).send(resp);
            }
            else{
                const err = new ProjectError("Credentials do not match");
                err.statuscode = 401;
                throw err;
            }
        }
    } 
    catch(error){
        next(error);
    }
}


const isUserExist = async (email : string) => {
    const user = await User.findOne({email});
    if(!user)
        return false;
    return true;
}

export {registerUser, loginUser, isUserExist};