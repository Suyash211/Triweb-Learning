//Call By Value
function callByValue(num){
    num += 1;
    console.log("Updated value inside the function : ",num);
}

//Call By Reference
function callByreference(student){
    student.name = "Your name is " + student.name;
    student.age = student.age + 2;
    console.log("Updated value inside the function : ",student);
}

let a = 17;
callByValue(a);
console.log("Value outside the function : ",a);

let student = {name : "Suyash",age : 19};
callByreference(student);
console.log("Value outside the function : ",student);
