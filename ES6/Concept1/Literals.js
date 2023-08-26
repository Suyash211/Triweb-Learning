function printData(sname,age){
    let toprint = `Student's name is ${sname} and age is ${age}`;
    console.log(toprint);
}


let uname = "Suyash";
let age = 20;
printData(uname,age);

function diff(sentence,name,age){
    console.log(sentence);
    console.log(name);
    console.log(age);
}

diff `Student's name is ${uname} and age is ${age}`;

let num = parseInt('0111110111',2);
console.log(num);