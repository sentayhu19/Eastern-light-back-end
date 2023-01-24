const {Router} = require('express');
const { getUsers, register } = require('../controllers.js/auth');
const { registerValidation , loginValidation} = require('../validators/auth');
const { validationMiddleware } = require('../middlewares/validations-middleware');
const router = Router();

router.get('/get-users', getUsers)
router.post('/register', registerValidation, validationMiddleware, register)
router.post('/login', loginValidation, validationMiddleware)

module.exports = router;