console.log("---------------Promises---------------");
function validate(name){
    return new Promise((resolve,reject)=>{
        if(name == "Suyash")
            resolve("Yes Validated");
        else
            resolve("Not Validated");
    });
}

console.log(validate("Suyash"));
console.log(validate("Nipun"));

validate("Suyash")
    .then((result)=>{
        console.log(result);
    })
    .catch((err)=>{
        console.log(err);
    })

console.log("---------------Promise Chaining---------------");

function returnUser(){
    return new Promise((resolve,reject)=>{
        resolve({name : "Suyash"})
    });
}

returnUser()
    .then((userData)=>{
        return userData.name;
    })
    .then((userName)=>{
        console.log("Hi ",userName);
    })
    .catch((err)=>{
        console.log(err);
    })