var express = require("express");
const {
  getProducts,
  addProduct,
  getProductCategories,
  getProductDetails,
  getCategoryProducts
} = require("../controller/products");
var router = express.Router();

/* get products route */
router.get("/getProducts", getProducts);

/* add product route */
router.post("/addProduct", addProduct);

/* get product vategories route */
router.get("/product-categories", getProductCategories);

/* get single product details route */
router.get("/productDetails/:id", getProductDetails);

/* get single category products route */
router.get("/product-categories/:category", getCategoryProducts);

module.exports = router;
