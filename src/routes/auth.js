const {Router} = require('express');
const { getUsers, register, login, protected, logout, addnewproduct, addnewcategory, getCategories, getProducts, getproductshow,getsearchbycat } = require('../controllers/auth');
const { deleteproduct } =  require('../controllers/products_controller');
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
router.get('/getproducts',getProducts)
router.get('/getcategories',getCategories)
router.get('/productshow', getproductshow)  //order with priority
router.post('/searchbycat', getsearchbycat);
router.post('/deleteproduct', deleteproduct);

module.exports = router;