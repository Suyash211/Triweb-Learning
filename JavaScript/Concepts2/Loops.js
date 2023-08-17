console.log("------------For Loop------------");

for(let i=1; i<5 ; i++){

    for(let j=1; j<5 ; j++){
        if(j == 4)
            continue;
        console.log(i + " " + j);
    }

    if(i == 3)
        break;
}

console.log("------------For In Loop------------");

obj = {
    firstName : "Suyash",
    lastName : "Gehlot"
}

for (const key in obj) {
    console.log(key + " in Object is " + obj[key]);
}

console.log("------------For of Loop------------");

const arr = [10,11,12,13,14,15];

for (let ele of arr) {
    console.log(ele);
}

console.log("------------For Each Loop------------");

arr.forEach(element => {
    console.log(element);
});