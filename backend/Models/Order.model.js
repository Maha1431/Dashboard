const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  discountPercentage: {
    type: Number,
    required: true,
  },
  discountedPrice: {
    type: Number,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
});

const orderSchema = new mongoose.Schema({
  products: {
    type: [productSchema], // Array of product objects
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  discountedTotal: {
    type: Number,
    required: true,
  },
  userId: {
    type: Number,
    required: true,
  },
  totalProducts: {
    type: Number,
    required: true,
  },
  totalQuantity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
