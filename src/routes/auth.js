const {Router} = require('express');
const { getUsers, register, login, protected, logout, addnewproduct, addnewcategory } = require('../controllers.js/auth');
const { registerValidation , loginValidation} = require('../validators/auth');
const { validationMiddleware } = require('../middlewares/validations-middleware');
const { userAuth } = require('../middlewares/auth-middleware');
const router = Router();

router.get('/get-users', getUsers)
router.get('/protected',userAuth, protected)
router.post('/register', registerValidation, validationMiddleware, register)
router.post('/login', loginValidation, validationMiddleware, login)
router.get('/logout', logout)
router.post('/addproduct',addnewproduct)
router.post('/addcategory',addnewcategory)

module.exports = router;