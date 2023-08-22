console.log("--------------Map-----------------");
let newMap = new Map();
newMap.set("name","Suyash");
console.log(newMap);

newMap.set("city","Dehradun");
console.log(newMap);

newMap.set("college","Graphic Era");
console.log(newMap);

let userName = newMap.get("name");
console.log("Name of the user is : ",userName);

console.log("--------------Weak Map-----------------");

let weakMap = new WeakMap();

let obj1 = {};
let obj2 = {1:1};
let obj3 = {2:2};
weakMap.set(obj1,"Suyash");
weakMap.set(obj2,"Dehradun");
weakMap.set(obj3,"Graphic Era");

let value = weakMap.get(obj1);
console.log("The value in the weak map is : ",value);
