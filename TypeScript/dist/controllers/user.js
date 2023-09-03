"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkTypesAndInterface = exports.registerUser = void 0;
const user_1 = require("../models/user");
const registerUser = (req, res) => {
    const userName = "Suyash";
    const password = "qwerty";
    const age = 19;
    const result = (0, user_1.addUserToDB)(userName, password, age);
    res.send(result);
};
exports.registerUser = registerUser;
const checkTypesAndInterface = (req, res) => {
    const myUser = {
        id: 1,
        uname: "Aryan",
        password: "zxcvbnm",
        age: 19,
        is_active: false
    };
    const result = (0, user_1.updateUserData)(myUser);
    res.send(result);
};
exports.checkTypesAndInterface = checkTypesAndInterface;
