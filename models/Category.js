const { mongoose, Schema } = require("../db");

const categorySchema = new Schema({
  name: String,
  photo: String,
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;