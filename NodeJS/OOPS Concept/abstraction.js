class Example{
    constructor(nm,rlNo){
        let name = nm;
        let rollNo = rlNo;

        let privateFunc = () => {
            return (`Name of the student is ${name} and Roll number of the student is ${rollNo}`);
        }

        this.publicFunc = () => {
            return (`Name of the student is ${name} and Roll number of the student is ${rollNo}`);
        }
    }
}

let obj = new Example("Suyash",65);
console.log(obj.publicFunc()); // Name of the student is Suyash and Roll number of the student is 65
console.log(obj.privateFunc); // undefined