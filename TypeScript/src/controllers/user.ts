import {addUserToDB, updateUserData} from '../models/user';
import { Request,Response } from 'express';

const registerUser = (req : Request,res : Response) => {

    const userName : string = "Suyash";
    const password : string = "qwerty";
    const age : number = 19;

    const result = addUserToDB(userName,password,age);

    res.send(result);
}

const checkTypesAndInterface= (req : Request, res : Response) => {
    const myUser = {
        id : 1,
        uname : "Aryan",
        password : "zxcvbnm",
        age : 19,
        is_active : false
    }
    const result = updateUserData(myUser);
    res.send(result);
}

export {registerUser, checkTypesAndInterface};