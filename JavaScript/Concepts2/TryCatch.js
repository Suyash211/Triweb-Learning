
function validateUsername(name,password){
    try{
        if(name.length < 5)
            throw new Error("Username is too short");
        else if(password.length < 6)
            throw new Error("Password is too short");
        else
            console.log("The username and password are valid");
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("The program has been executed");
    }
}

let name = "Suyash";
let password = "qwertyui";
validateUsername(name,password);