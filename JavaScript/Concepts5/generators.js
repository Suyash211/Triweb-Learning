function* makeIterator(start = 0,end = 50,step = 1){
    let iterationCount = 0;
    for(let i=start; i<end ;i+=step){
        iterationCount++;
        yield i;
    }
    return iterationCount;
}

const myGenerator = makeIterator(0,5);
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());
console.log(myGenerator.next());