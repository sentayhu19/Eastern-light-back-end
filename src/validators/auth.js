const { check }  = require ( 'express-validator' );
const db = require ( '../db' );
const {compare} = require('bcryptjs');

//password
const password = check( 'password' )
.isLength({min: 6, max: 15})
.withMessage('Password must be between 6 and 15 characters');

//email
const email = check('email')
.isEmail().withMessage('Email is not valid');

//check if email exists

const emailExists = check('email').custom(async (value) => {
    const { rows } = await db.query('select * from users where email = $1', [
value,
])
if (rows.length) {
    throw new Error('Email already exists');
}
});

//login validation
const loginFieldsCheck =  check(email).custom(async(value, {req}) => {
   const user =  await db.query('select * from users where email = $1', [value])
   if(!user.rows.length){
    throw new Error('Email does not  exists');
   }
   const validPassword = await compare(req.body.password, user.rows[0].password)
   if(!validPassword){
    throw new Error('Password is incorrect');
   }
})

module.exports ={
    registerValidation: [email, password, emailExists],
    loginValidation: [loginFieldsCheck],
}