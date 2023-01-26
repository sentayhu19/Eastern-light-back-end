const db = require('../db')
const { hash} = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const { SECRET } = require('../constants') 


exports.getUsers = async (req, res) => {
    try {
        const {rows} = await db.query('select user_id, email from users')
        return res.status(200).json({
            success: true,
            users: rows,
        })
    
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

exports.login = async (req, res) => {
    let user = req.user

   let payload = {
        id: user.user_id,
        email: user.email,
        username: user.username
    }
    try {
        const token = await sign(payload, SECRET)
return res.status(200).cookie('token', token, {httpOnly: true}).json({
    success: true,
    message: 'User logged in successfully'
    })
}
    catch(err){
        console.log("ERROR: ",err.message)
      return res.status(500).json({
        error: err.message
      })
    }
}

exports.protected = async (req, res) => {
    try {
       
        return res.status(200).json({
           info: 'This is a protected route'
        })
    
    }
    catch(err){
        console.log("ERROR: ",err)
    }
}

exports.logout = async (req, res) => {
    try {
        console.log("LOGOUT FROM DEVICE")
      return res.status(200).clearCookie('token', { httpOnly: true }).json({
        success: true,
        message: 'Logged out succefully',
      })
    } catch (error) {
      console.log(error.message)
      return res.status(500).json({
        error: error.message,
      })
    }
  }

  //PRODUCTS ***********************************************************************************************
  exports.addnewproduct = async (req, res) => {
    const { name, description, brand, price, image, priority } = req.body
    try {
        const hashedPassword = await hash(password, 10)
        await db.query('insert into products (email, password, username) values ($1, $2, $3, $4, $5)', [name, description,brand, price, image, priority])
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
