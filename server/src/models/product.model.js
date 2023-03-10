const mongoose = require("mongoose");

const productSchema = {
  title: { type: String, require: true },
  price: { type: Number, require: true },
  currency: { type: String, require: true },
  images: { type: [String], require: true },
  color: String || [String],
  about: { type: [String], require: true },
  QandA: { type: [Object], require: true, default: [] },
  views: { type: Number, default: 0 },
  visits: { type: Number, default: 0 },
  reviews: {
    type: Object,
    default: {
      one: 0,
      two: 0,
      three: 0,
      four: 0,
      five: 0,
    },
  },
  gategory_id: { type: Number, require: true },
  extra_images: [String],
  store_id: { type: Number, default: 5 },
  inserted_at: { type: Date, default: Date.now() },
};

module.exports = mongoose.model("Product", productSchema);
