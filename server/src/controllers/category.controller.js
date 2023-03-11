const Category = require("../models/category.model");

async function getCategories(req, res) {
  try {
    const categories = await Category.find({}, { __v: 0 });
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function postCategory(req, res) {
  const category = new Category(req.body);
  try {
    const savedCategory = await category.save();
    res.status(201).json(savedCategory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = {
  getCategories,
  postCategory,
};
