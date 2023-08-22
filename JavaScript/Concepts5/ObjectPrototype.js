let obj = {name:"Suyash", address:"Dehradum"};

console.log('---------------__proto__------------------');

console.log(obj.__proto__);
let obj1 = Object.create(obj);
obj1.name = "Nipun";
console.log("Obj1.__proto__",obj1.__proto__);
obj1.__proto__.display = function(){
    console.log(`${this.name} lives in ${this.address}`);
}
obj1.display();

console.log('---------------------------------');
let obj2 = Object.create(obj);
obj2.name = "Aditya";
console.log("Obj2.__proto__",obj2.__proto__);
obj2.display();

function Student(name, age){
    this.name = name;
    this.age = age;
}

let student1 = new Student("Suyash",19);



let student2 = new Student("Nipun",19);

console.log("-------------prototype--------------")

console.log(Student.prototype);

Student.prototype.display = function(){
    console.log(`Hi ${this.name}`);
}

student1.display();
student2.display();