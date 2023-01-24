const {Router} = require('express');
const { getUsers } = require('../controllers.js/auth');
const { registrationValidation } = require('../validators/auth');
const { validationMiddleware } = require('../middlewares/validations-middleware');
const router = Router();

router.get('/get-users', getUsers)
router.post('/register', registrationValidation, validationMiddleware, register)

module.exports = router;