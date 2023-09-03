import {addUserToDB} from '../models/user';
import { Request,Response } from 'express';
const registerUser = (req : Request,res : Response) => {

    const userName = "Suyash";
    const password = "qwerty";

    const result = addUserToDB(userName,password);

    res.send(result);
}

export {registerUser};