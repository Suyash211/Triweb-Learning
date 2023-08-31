class calcArea{
    findArea = (length,breadth) => {
        let ans = length * breadth;
        console.log("The area of the rectangle is : ",ans);
    }

    findArea = (radius) => {
        let ans = Math.PI * radius * radius;
        console.log("The area of the circle is : ",ans);
    }
}

let obj = new calcArea();
obj.findArea(5,4);
obj.findArea(7);