const { mongoose, Schema } = require("../db");

const productSchema = new Schema({
  name: String,
  description: String,
  photo: [String],
  price: String,
  stock: Number,
  category: String,
  featured: Boolean,
  slug: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;