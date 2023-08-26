console.log("------------------Default Parameters-------------------");

function addTwoNumbers(num1 = 0,num2 = 0){
    return num1 + num2;
}

console.log(addTwoNumbers(1,6)); 
console.log(addTwoNumbers(8));
console.log(addTwoNumbers());

console.log("------------------Rest Parameter-------------------");

function addNumbers(...num){
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i];
    }
    return sum;
}

console.log(addNumbers(1,2));
console.log(addNumbers(3,6,9));
console.log(addNumbers(5,6,8,9));

console.log("------------------Spread Parameter-------------------");

let arr1 = [1,2,3];
let arr2 = [4,5];

let combinedArr = [...arr1,...arr2];
console.log(...arr1);
console.log(...arr2);
console.log(combinedArr);

let objStudent = {name : "Suyash", age : 19};

let objStudent1 = {...objStudent};

objStudent1.name = "Nipun";
objStudent1.age = 20;

console.log("After update objStudent  : ",objStudent);
console.log("After update objStudent1  : ",objStudent1);