const { mongoose, Schema } = require("../db");

const categorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  photo: String,
  slug: String,
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;