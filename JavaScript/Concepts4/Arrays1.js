
let arr = [1,2,3,4,];

console.log("-----------shift------------");
let eleShift = arr.shift();
console.log("Length after shifting : ",eleShift);
console.log("The array after shifting : ",arr);

console.log("-----------unshift------------");
let eleunShift = arr.unshift(11);
console.log("Length after shifting : ",eleunShift);
console.log("The array after shifting : ",arr);

console.log("-----------slice---------------");
let arr1 = [1,2,3,4,5,6];
let arrSlice = arr1.slice(1,4);
console.log("Sliced array : ",arrSlice);
console.log("Original Array : ",arr1);

console.log("-----------splice---------------");
let arr2 = [1,2,3,4,5,6];
let arrSplice = arr2.splice(1,4);
console.log("Sliced array : ",arrSplice);
console.log("Original Array : ",arr2);

console.log("-----------replace with splice---------------");
let arr3 = [1,2,3,4,5,6];
let arrRepSplice = arr3.splice(1,1,'a','b','c');
console.log("Sliced array : ",arrRepSplice);
console.log("Original Array : ",arr3);