
function multiplyAll(){
    let ans = 1;
    for (const ele of arguments) {
        ans *= ele;
    }
    console.log(ans);
}

function incrementEach(num,...arg){
    arg.forEach(element => {
        console.log(element + num);
    });
}

console.log("---------Multiply all the numbers----------");
multiplyAll(10,20,80,50);
multiplyAll(20,70,90,200);

console.log("----------Increment Function-----------")
incrementEach(18,200,30,58,90);