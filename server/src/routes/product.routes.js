const express = require("express");
const { authanticateUser } = require("../middlewares/authanticate");
const {
  getProducts,
  getLatestProducts,
  getProductById,
  reviewProduct,
  postProduct,
  deleteProduct,
  putProduct,
} = require("../controllers/product.controller");

const router = express.Router();

router.get("/", getProducts);
router.get("/latest", getLatestProducts);
router.post("/review/:id", authanticateUser, reviewProduct);
router.get("/:id", getProductById);
router.post("/", postProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
