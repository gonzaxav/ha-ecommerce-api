const { mongoose, Schema } = require("../db");

const productSchema = new Schema({
  name: String,
  description: String,
  photo: [String],
  price: String,
  stock: Number,
  category: { type: Schema.Types.ObjectId, ref: "Category" },
  featured: Boolean,
  slug: String,
  shortDescription: String,
  isActive: Boolean,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;