var express = require("express");
const { getProducts, addProduct, getProductCategories } = require("../controller/products");
var router = express.Router();

/* get products route */
router.get("/getProducts", getProducts);


/* add product route */
router.post("/addProduct", addProduct);


/* get product vategories route */
router.get("/product-categories", getProductCategories);

module.exports = router;
