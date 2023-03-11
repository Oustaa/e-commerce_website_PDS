const mongoose = require("mongoose");

const CategorySchema = {
  name: {
    type: String,
    required: true,
    unique: true,
  },
  image: String,
};

module.exports = mongoose.model("Category", CategorySchema);
