const http = require("http");
const app = require("./app");
require("dotenv").config();
const mongoose = require("mongoose");

const mongoConnect = require("./databases/mongodb.connect");

mongoose.set("strictQuery", false);
mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready");
  server.listen(PORT, function () {
    console.log(`server start listening on port ${PORT}`);
  });
});
mongoose.connection.on("error", (err) => {
  console.error(err);
});

mongoConnect();

const PORT = process.env.PORT || 8000;

const server = http.createServer(app);
