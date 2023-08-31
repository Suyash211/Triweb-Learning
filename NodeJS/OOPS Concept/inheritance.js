class Person{
    constructor(name){
        this.nm = name;
    }
    
    printName() {
        console.log("The name of the person is : ",this.nm);
    }
}

class Student extends Person{
    constructor(name,id){
        super(name);
        this.id = id;
    }

    printName(){
        super.printName();
        console.log("The id of the student is : ",this.id);
    }
}

p1 = new Person("Suyash");
s1 = new Student("Aryan",22);

p1.printName();
s1.printName();