"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = void 0;
const registerUser = (req, res, next) => {
    console.log("Registration done");
    console.log(req.body);
    res.send("Registration done");
};
exports.registerUser = registerUser;
