const cors = require("cors");
const helmet = require("helmet");
const express = require("express");

const productsRouter = require("./routes/product.routes");
const categoriesRouter = require("./routes/category.routes");
const authRouter = require("./routes/auth.routes");
const usersRouter = require("./routes/users.routes");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

module.exports = app;
