const { Router } = require("express");
const {
  getUsers,
  register,
  login,
  protectedset,
  logout,
} = require("../controllers/auth");
const {
  getCategories,
  getsearchbycat,
  addnewcategory,
} = require("../controllers/category_cotroller");
const {
  deleteproduct,
  editproduct,
  getproduct,
  addnewproduct,
  getProducts,
  getproductshow,
  addunit,
  getunit,
  addview,
  getview,
} = require("../controllers/products_controller");
const {
  addmessage,
  getmessages,
} = require("../controllers/message_controller");
const { registerValidation, loginValidation } = require("../validators/auth");
const {
  validationMiddleware,
} = require("../middlewares/validations-middleware");
const { userAuth } = require("../middlewares/auth-middleware");
const router = Router();

router.get("/get-users", getUsers);
router.get("/protected", userAuth, protectedset);
router.post("/register", registerValidation, validationMiddleware, register);
router.post("/login", loginValidation, validationMiddleware, login);
router.get("/logout", logout);
router.post("/addproduct", addnewproduct);
router.post("/addcategory", addnewcategory);
router.get("/getproducts", getProducts);
router.get("/getcategories", getCategories);
router.get("/productshow", getproductshow); //order with priority
router.post("/searchbycat", getsearchbycat);
router.post("/deleteproduct", deleteproduct);
router.put("/editproduct", editproduct);
router.get("/getproduct/:id", getproduct); //individual product
router.post("/addmessage", addmessage);
router.get("/getmessages", getmessages);
router.post('/addunit', addunit)
router.get('/getunit', getunit)
router.patch('/addview', addview)
module.exports = router;
