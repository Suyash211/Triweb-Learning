
const cities = "Dehradun,Solan,New Delhi,Mumbai,Kolkata";
const cityArr = cities.split(',');

cityArr.forEach(city => {
    console.log("You are currently in " + city);
});

console.log("-----------------------");

const str = "Hello how are you doing today";
const sliceStr = str.slice(0,2);
console.log(sliceStr);

const subStr = str.substring(0,2);
console.log(subStr);

console.log("-----------------------");

const strk = "Hello i have some birds here";
const strReplace = strk.replace("birds","animals");
console.log(strReplace);

console.log("-----------------------");
const lowStr = str.toLowerCase();
console.log(lowStr);

const upperStr = str.toUpperCase();
console.log(upperStr);