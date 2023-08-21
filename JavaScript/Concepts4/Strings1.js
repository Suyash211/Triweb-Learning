
const str = "Hi I am here";
console.log("The first character of the string is : ",str.charAt(0));

console.log("-----------------------");
console.log("The index of the H is : ",str.indexOf('H'));
console.log("The index of the h is : ",str.indexOf('h'));

console.log("-----------------------");
console.log("The index of the first e is : ",str.indexOf('e'));
console.log("The index of the last e is : ",str.lastIndexOf('e'));

console.log("-----------------------");
if(str.startsWith('Hi')){
    console.log("The string starts with Hi");
}
else{
    console.log("The string does not start with Hi");
}

console.log("-----------------------");
if(str.endsWith('here')){
    console.log("The string ends with here");
}
else{
    console.log("The string does not end with here");
}

console.log("-----------------------");
if(str.includes('here')){
    console.log("The string include am");
}
else{
    console.log("The string does not include am");
}