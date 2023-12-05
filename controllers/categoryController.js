const Product = require("../models/Product");
const Category = require("../models/Category");

async function index(req, res) {
  const categories = await Category.find();
  return res.json({categories});
}

async function show(req, res) {
  const category = await Category.findOne({slug: req.params.slug});
  return res.json({category});
}


async function showAboutUs(req, res) {}

async function show404(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  showAboutUs,
};
