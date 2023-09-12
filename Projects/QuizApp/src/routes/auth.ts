import express from 'express';
import {registerUser, loginUser, isUserExist} from '../controllers/auth'
import { body } from 'express-validator';
import ProjectError from '../../helper/error';

const router = express.Router();

router.post('/', [
    body('name')
        .trim()
        .not()
        .isEmpty()
        .isLength({min : 4})
        .withMessage("Please enter a valid name atleast 4 characters long"),
    body('email')
        .trim()
        .isEmail()
        .custom((emailId : string) => {
            return isUserExist(emailId)
                .then((status : boolean) => {
                    if(status){
                        return Promise.reject("User already exists");
                    }
                })
                .catch((err) => {
                    return Promise.reject(err);
                })
        })
        .normalizeEmail(),
    body('password')
        .trim()
        .isLength({min : 8})
        .withMessage("Enter atleast 8 character long password"),
    body('confirm_password')
        .trim()
        .custom((value : String, {req}) => {
            if(value != req.body.password){
                return Promise.reject("Password mismatch");
            }
            return true;
        })
] ,registerUser);

router.post('/login', loginUser);

export default router;