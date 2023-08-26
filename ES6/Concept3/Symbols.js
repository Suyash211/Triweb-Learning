const person = {
    id : 1234,
    pname : 'XYZ'
};

const xyz = Symbol('xyz');
person[xyz] = "Hidden Data";

console.log(Object.getOwnPropertySymbols(person));
const newSymbol = Symbol('xyz');
console.log(person[newSymbol]); // gives undefined

console.log(person[xyz]);

const abc = Symbol.for('abc');
person[abc] = 'Not Hidden Data';
console.log(person[abc]);
const newSymbol1 = Symbol.for('abc');

console.log(person[newSymbol1]); // gives Not Hidden Data