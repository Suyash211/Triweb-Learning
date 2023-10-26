let student = {
    sname:"Suyash",
    course:"btech",
    mobile:1234
}

console.log(student);

let strFromObj = JSON.stringify(student);
console.log(strFromObj);

let objFromStr = JSON.parse(strFromObj);
console.log(objFromStr);