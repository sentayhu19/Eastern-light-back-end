const {Router} = require('express');
const { getUsers, register } = require('../controllers.js/auth');
const { registerValidation } = require('../validators/auth');
const { validationMiddleware } = require('../middlewares/validations-middleware');
const router = Router();

router.get('/get-users', getUsers)
router.post('/register', registerValidation, validationMiddleware, register)

module.exports = router;