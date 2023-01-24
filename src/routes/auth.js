const {Router} = require('express');
const { getUsers } = require('../controllers.js/auth');
const router = Router();

router.get('/get-users', getUsers)

module.exports = router;