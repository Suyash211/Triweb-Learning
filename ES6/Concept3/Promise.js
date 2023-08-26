function updateAge(age){
    return new Promise((resolve,reject)=>{
        if(age > 0){
            age = age + 1;
            resolve(age);
        }
        else{
            throw new Error("invalid Age");
        }
    })
}

updateAge(7)
    .then((updatedAge)=>{
        console.log("Updated Age is ",updatedAge);
    })
    .catch((err)=>{
        console.log(err);
    })
    