function demoNewTarget(x){
    if(new.target == undefined)
        console.log("No");
    else
        console.log("Created object");
    console.log("Inside func");
}

demoNewTarget(7);

let x = new demoNewTarget(3);
console.log(x);