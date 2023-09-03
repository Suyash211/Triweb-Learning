
const addUserToDB = (username : string,password : string,age : number) => {
    
    console.log("Username : ",username);
    console.log("Password : ",password);
    console.log("Age : ",age);
    return "User registration done";
}
type lockedStatus = "locked" | "unlocked";

interface User{
    id : number,
    uname : string,
    password : string,
    age : number,
    is_active : true | false
}

const updateUserData = (objUser : User) : string => {
    console.log(objUser.uname);

    return "Update done";
}

export {addUserToDB , updateUserData};