console.log("-------------------Map-----------------");

const student1 = {sname : "Suyash"};
const student2 = {sname : "Nipun"};

const studentMap = new Map();

studentMap.set(student1,"He is an average student");
studentMap.set(student2,"He is a good student");

console.log(studentMap);

console.log("-------------------Set-----------------");

let newSet = new Set();

newSet.add(1);
newSet.add(2);
newSet.add(3);
newSet.add(4);
newSet.add(2);

console.log(newSet);

