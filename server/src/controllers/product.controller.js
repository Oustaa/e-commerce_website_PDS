const Product = require("../models/product.model");

const { getFilters } = require("../utils/filter");
const { getPagination } = require("../utils/pagination");

async function getProducts(req, res) {
  const { skip, limit } = getPagination(req.query);
  const projection = {
    title: 1,
    price: 1,
    reviews: 1,
    images: 1,
    gategory_id: 1,
  };
  const filters = getFilters(req.query);
  const products = await Product.find({ $and: filters }, {})
    .skip(skip)
    .limit(limit);
  res.status(200).json(products);
}

async function getLatestProducts(req, res) {
  const limit = req.query.limit || 6;
  const products = await Product.find({}).sort("inserted_at").limit(limit);
  res.status(200).json(products);
}

async function getProductsByCategory(req, res) {
  const { category } = req.params;
  const products = await Product.find({ category });
  res.status(200).json(products);
}

async function reviewProduct(req, res) {
  const { user_id, message, body, review } = req.body;
  const { id } = req.params;
  console.log(review);
  const updatedProduct = await Product.updateOne(
    { _id: id },
    {
      $push: { reviews: { user_id, message, body, review } },
      $inc: { [`reviewsOverview.${review}`]: 1 },
    }
  );
  return res.status(200).json(updatedProduct);
}

async function getProductById(req, res) {
  const { id } = req.params;
  try {
    const product = await Product.findById(id);
    if (!product)
      return res
        .status(404)
        .json({ message: `product id ${id} was not found`, id });
    res.json(product);
  } catch (error) {
    return res.status(500).json({
      message: `internal server error`,
    });
  }
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
  getProductsByCategory,
  reviewProduct,
  getProductById,
  postProduct,
  deleteProduct,
  putProduct,
};
