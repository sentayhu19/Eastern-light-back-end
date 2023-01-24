const db = require('../db')
const { hash} = require('bcryptjs')

exports.getUsers = async (req, res) => {
    try {
        const response = await db.query('select * from users')
        console.log("RESPONSE: ",response)
    }
    catch(err){
        console.log("ERROR: ",err)
    }
}

exports.register = async (req, res) => {
    const { email, password, username } = req.body
    try {
        const hashedPassword = await hash(password, 10)
        await db.query('insert into users (email, password, username) values ($1, $2, $3)', [email, hashedPassword,username])
        return res.status(201).json({
            success: true,
            message: 'User registered successfully'
        })
    }
    catch(err){
        console.log("ERROR: ",err.message)
      return res.status(500).json({
        error: err.message
      })
    }
}