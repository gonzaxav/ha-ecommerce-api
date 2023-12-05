const { mongoose, Schema } = require("../db");

const categorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  photo: String,
  slug: String,
  isActive: Boolean,
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
