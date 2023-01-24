const db = require('../db')
exports.getUsers = async (req, res) => {
    try {
        const response = await db.query('select * from users')
        console.log("RESPONSE: ",response)
    }
    catch(err){
        console.log("ERROR: ",err)
    }
}