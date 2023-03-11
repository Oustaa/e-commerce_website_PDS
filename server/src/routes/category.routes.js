const express = require("express");
const {
  getCategories,
  postCategory,
} = require("../controllers/category.controller");

const router = express.Router();

router.get("/", getCategories);
router.post("/", postCategory);

module.exports = router;
