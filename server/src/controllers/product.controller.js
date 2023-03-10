const Product = require("../models/product.model");

const { getPagination } = require("../utils/pagination");

async function getProducts(req, res) {
  const { skip, limit } = getPagination(req.query);
  const products = await Product.find(
    {},
    { title: 1, price: 1, reviews: 1, images: 1 }
  )
    .skip(skip)
    .limit(limit);
  res.status(200).json(products);
}

async function getLatestProducts(req, res) {
  const limit = req.query.limit || 6;
  const products = await Product.find({}).sort("inserted_at").limit(limit);
  res.status(200).json(products);
}

async function getProductById(req, res) {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
  } catch (error) {
    return res.status(500).json({
      message: `internal server error`,
    });
  }
  if (!product)
    return res
      .status(404)
      .json({ message: `product id ${id} was not found`, id });
  res.json(product);
}

async function postProduct(req, res) {
  const { body } = req;
  console.log(body);
  const product = await new Product(body);
  product.save();
  res.status(201).json(product);
}

async function deleteProduct(req, res) {
  const { id } = req.params;
  const product = await Product.findByIdAndDelete(id);
  res.json(product);
}

async function putProduct(req, res) {}

module.exports = {
  getProducts,
  getLatestProducts,
  getProductById,
  postProduct,
  deleteProduct,
  putProduct,
};
