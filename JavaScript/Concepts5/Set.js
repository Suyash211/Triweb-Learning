console.log("--------------Set------------");
let newSet = new Set();

newSet.add(34);
newSet.add(64);
newSet.add(77);
newSet.add(88);
newSet.add(11);

console.log("The set is currently : ",newSet);
console.log("Now we try to add 64 again in the set ");

newSet.add(34);
console.log("The set after adding 64 again in the set : ",newSet);

newSet.delete(88);
console.log("The set after deleting 88 from it : ",newSet);

if(newSet.has(11)){
    console.log("The set has element 11 present in the set");
}
else{
    console.log("The set does not have element 11 present in the set");
}

newSet.delete(11)
if(newSet.has(11)){
    console.log("The set has element 11 present in the set");
}
else{
    console.log("The set does not have element 11 present in the set");
}

console.log("--------------Weak Set------------");
let wSet = new WeakSet([{n:'name'},{a:'address'}]);

console.log(wSet);