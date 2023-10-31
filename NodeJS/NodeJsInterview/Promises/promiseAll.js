function func1() {
    return new Promise((res, rej) => {
        res("Function 1");
    })
}

function func2() {
    return new Promise((res, rej) => {
        rej("Function 2 - Rejected");
    })
}

function func3() {
    return new Promise((res, rej) => {
        res("Function 3");
    })
}

Promise.all([func1(), func2(), func3()])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => { console.log(error) })