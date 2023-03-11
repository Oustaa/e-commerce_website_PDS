const express = require("express");

const productsRouter = require("./routes/product.routes");
const categoriesRouter = require("./routes/category.routes");

const app = express();

app.use(express.json());

app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

module.exports = app;
