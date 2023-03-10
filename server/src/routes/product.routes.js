const express = require("express");
const {
  getProducts,
  getLatestProducts,
  getProductById,
  postProduct,
  deleteProduct,
  putProduct,
} = require("../controllers/product.controller");

const router = express.Router();

router.get("/", getProducts);
router.get("/latest", getLatestProducts);
router.get("/:id", getProductById);
router.post("/", postProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
