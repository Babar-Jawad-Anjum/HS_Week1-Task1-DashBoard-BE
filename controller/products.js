const Product = require("../models/products");

//GET ALL PRODUCTS
async function getProducts(req, res) {
  const products = await Product.find();

  res.send({ products: products });
}

//ADD NEW PRODUCT
async function addProduct(req, res) {
  const product = new Product(req.body);
  await product.save();

  res.send({ success: "Product has been saved successfully" });
}

//GET PRODUCT CATEGORIES
async function getProductCategories(req, res) {
  const distinctCategories = await Product.find().distinct("category");

  res.send({ categories: distinctCategories });
}

module.exports = { getProducts, addProduct, getProductCategories };
