const getUser = (req,res) => {
    res.send("User found");
}

const postUser = (req,res) => {
    res.send("Post found");
}

const putUser = (req,res) => {
    res.send("Put found");
}

module.exports.getUser = getUser;
module.exports.putUser = putUser;
module.exports.postUser = postUser;