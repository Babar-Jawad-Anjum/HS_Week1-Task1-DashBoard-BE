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

//GET SINGLE PRODUCT DETAILS
async function getProductDetails(req, res) {
  const id = req.params.id;

  const product = await Product.findById(id);

  res.send({ productDetail: product });
}

//GET CATEGORY PRODUCTS
async function getCategoryProducts(req, res) {
  const category = req.params.category;

  console.log(category);
  if (category === "All-categories") {
    const categoryProducts = await Product.find();

    res.send({ categoryProducts: categoryProducts });
  } else {
    const categoryProducts = await Product.find({ category: category });

    res.send({ categoryProducts: categoryProducts });
  }
}

module.exports = {
  getProducts,
  addProduct,
  getProductCategories,
  getProductDetails,
  getCategoryProducts,
};
