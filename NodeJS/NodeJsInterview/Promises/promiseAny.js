function func1() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Function 1")
        }, 1000);
    })
}

function func2() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            res("Function 2")
        }, 2000);
    })
}

function func3() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            rej("Function 3")
        }, 500);
    })
}

Promise.any([func1(), func2(), func3()])
    .then((result) => { console.log(result) })
    .catch((error) => {console.log(error)})