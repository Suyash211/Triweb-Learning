"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUserData = exports.addUserToDB = void 0;
const addUserToDB = (username, password, age) => {
    console.log("Username : ", username);
    console.log("Password : ", password);
    console.log("Age : ", age);
    return "User registration done";
};
exports.addUserToDB = addUserToDB;
const updateUserData = (objUser) => {
    console.log(objUser.uname);
    return "Update done";
};
exports.updateUserData = updateUserData;
