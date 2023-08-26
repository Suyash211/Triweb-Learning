console.log(Math.trunc(5.7));
console.log(Math.trunc(-5.9));

console.log(Math.sign(-20));
console.log(Math.sign(20));
console.log(Math.sign(0));

console.log(Math.cbrt(64));
console.log(Math.cbrt(27));

let x = Number.EPSILON;
console.log(x);

let y = Number.MAX_SAFE_INTEGER;
console.log(y);

let z = Number.MIN_SAFE_INTEGER;
console.log(z);

let a = 123;
let b = 2489247129477;
console.log(Number.isInteger(a));

console.log(Number.isSafeInteger(b));

console.log(isFinite(20000/0));

console.log(isNaN(2/'e'));