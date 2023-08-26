let arr = [1,2,3,4];
let [a,b] = arr;

console.log("First element : ",a);
console.log("Second element : ",b);

[b,a] = [a,b];

console.log("First element : ",a);
console.log("Second element : ",b);

function getStudent(){
    let student = {
        sname : "Suyash",
        age : "20",
        course : "Btech"
    }
    return student;
}

let {sname,age,course} = getStudent();

console.log(sname, age, course);

function getData(){
    let obj = {
        ename : "Suyash",
        salary : 1000000,
        location : {
            city : "Delhi"
        }
    }
    return obj;
}

let {ename : employeename, salary : employeeSalary , location : {city : employeeCity}} = getData();

console.log(employeename, employeeSalary, employeeCity);

function printDataType({name : ename, age : eage}){
    console.log("Name is ",ename);
    console.log("Age is ",eage);
}

printDataType({name : "Suyash", age : 20});