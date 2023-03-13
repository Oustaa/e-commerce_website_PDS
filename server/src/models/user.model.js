const mongoose = require("mongoose");

const UserSchema = {
  fullname: {
    type: {
      firstname: { type: String, required: true },
      lastname: { type: String, required: true },
    },
    required: true,
  },
  username: { type: String, required: true, unique: true },
  privileges: { type: String, default: "user" },
  avatar: { type: String, default: null },
  email: { type: String, required: true, unique: true },
  verified_email: { type: Boolean, default: false },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  verified_phone: { type: Boolean, default: false },
  address: {
    country: { type: String, required: true },
    city: { type: String, required: true },
    street: { type: String, required: true },
    zipcode: { type: Number, required: true },
  },
  birthDay: { type: Date, required: true },
  created_at: { type: Date, default: Date.now() },
  deleted_at: { type: Date, default: null },
  suspended: { type: Boolean, default: false },
  cart: {
    type: Object,
    default: {
      subTotal: 0,
      items: [{ product_id: String, quantity: Number }],
    },
  },
};

module.exports = mongoose.model("user", UserSchema);
