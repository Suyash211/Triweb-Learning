const db = require('../util/database');

module.exports.insert = async (userData) => {
    let query = "INSERT INTO `users` (`name`, `email`, `password`, `remark`) VALUES (?,?,?,?)";
    
    let result = await db.execute(query,[userData.name, userData.email, userData.password, userData.remark]);

    return true;
}