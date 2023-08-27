module.exports.add = (req, res) => {
    let sum = req.body.num1 + req.body.num2;
    res.send("The sum of numbers is: " + sum);
};

module.exports.sub = (req, res) => {
    let sub = req.body.num1 - req.body.num2;
    res.send("The subtraction of numbers is: " + sub);
};

module.exports.multiply = (req, res) => {
    let mul = req.body.num1 * req.body.num2;
    res.send("The multiplication of numbers is: " + mul);
};

module.exports.divide = (req, res) => {
    let div = req.body.num1 / req.body.num2;
    res.send("The division of numbers is: " + div);
};
