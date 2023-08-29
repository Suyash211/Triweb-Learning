const userModel = require('../models/user');

module.exports.register = async(req,res) => {
    console.log(req.body);
    let result = await userModel.create(req.body);

    if(result.dataValues.id > 0){
        res.send({status:"success", data:{id:result.dataValues.id}});
    }
    else{
        res.send({status:"error", message : "User registration failed"});
    }
}

module.exports.get = async(req,res) => {
    let data = await userModel.get(req.body);
    if(data){
        res.send({status:"success", data:data});
    }
    else{
        res.send({status:"error", message : "User not found"});
    }
}

module.exports.update = async(req,res) => {
    let status = await userModel.update(req.body);
    if(status){
        res.send({status:"success", message:"User data updated"});
    }
    else{
        res.send({status:"error", message : "User not updated"});
    }
}

module.exports.delete = async(req,res) => {
    let status = await userModel.delete(req.body);
    if(status){
        res.send({status:"success", message: "User deleted"});
    }
    else{
        res.send({status:"error", message : "User not deleted"});
    }
}