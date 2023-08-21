let arr = [1,2,3,4,5];

console.log("------------map---------");
let arrSqr = arr.map((element)=>{
    return element * element;
});
console.log("The array of squares is : ",arrSqr);

console.log("------------filter---------");
let arrFilter = arr.filter((element)=>{
    return element % 2 == 0;
});
console.log("The filtered array is : ",arrFilter);

console.log("------------every---------");
let arrEvery = arr.every((element)=>{
    return element % 2 == 0;
});
console.log(arrEvery);

console.log("------------some---------");
let arrSome = arr.some((element)=>{
    return element % 2 == 0;
});
console.log(arrSome);