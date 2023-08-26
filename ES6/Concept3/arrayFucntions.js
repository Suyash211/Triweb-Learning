let str = "Hello";
let arr = Array.from(str);
console.log(arr);

function checkData(){
    console.log(arguments);
    let argArr = Array.from(arguments);
    console.log(argArr);
}

checkData(1,2,3,4,5);

let arr1 = [12,18,14,15,16];

function getOdd(value,index,ar){
    return value % 2 != 0;
}

let firstOddNumber = arr1.find((value,index,ar)=>{
    return value % 2 != 0;
});

console.log(firstOddNumber);

let indexFirstOddNumber = arr1.findIndex((value,index,ar)=>{
    return value % 2 != 0;
});

console.log(indexFirstOddNumber);