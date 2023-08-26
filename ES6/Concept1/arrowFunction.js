const retObj = (uname,age) => {
    return {name : uname,age : age};
}

let obj = retObj("Suyash",20);
console.log(obj);

const add = (num1,num2) => {return num1 + num2};

let addTwoNumbers = add(10,99);
console.log(addTwoNumbers);

const square = (num) => {return num * num};

let squareOfNumber = square(19);
console.log(squareOfNumber);

let arr = [1,2,3,4,5];

arr.forEach((ele) => {
    console.log(ele);
})