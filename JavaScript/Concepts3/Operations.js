
function add(){
    let x = parseInt(document.getElementById("fno").value);
    let y = parseInt(document.getElementById("sno").value);
    let res = x + y;
    document.getElementById('ans').innerHTML = "The answer of the addition will be " + res;
}

function sub(){
    let x = parseInt(document.getElementById("fno").value);
    let y = parseInt(document.getElementById("sno").value);
    let res = x - y;
    document.getElementById('ans').innerHTML = "The answer of the subtraction will be " + res;;
}

function mul(){
    let x = parseInt(document.getElementById("fno").value);
    let y = parseInt(document.getElementById("sno").value);
    let res = x * y;
    document.getElementById('ans').innerHTML = "The answer of the multiplication will be " + res;;
}

function div(){
    let x = parseInt(document.getElementById("fno").value);
    let y = parseInt(document.getElementById("sno").value);
    let res = x / y;
    document.getElementById('ans').innerHTML = "The answer of the division will be " + res;;
}

let addbtn = document.getElementById("add");
let subbtn = document.getElementById("sub");
let mulbtn = document.getElementById("mul");
let divbtn = document.getElementById("div");

addbtn.addEventListener('click',add);
subbtn.addEventListener('click',sub);
mulbtn.addEventListener('click',mul);
divbtn.addEventListener('click',div);

