const express = require("express");
const productsRouter = require("./routes/product.routes");
const app = express();

app.use(express.json());

app.use("/products", productsRouter);

module.exports = app;
