
function Employee(mobile){
    this.department = "None";
    this.mobile = '';
}

function Manager(name){
    this.name = name;
    Employee.call(this);
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

let suyash = new Manager("Suyash");
console.log(suyash);
suyash.email = "suyash@gmail.com";
console.log(suyash);
console.log(suyash.__proto__);
