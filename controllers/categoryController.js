const Product = require("../models/Product");
const Category = require("../models/Category");

const formidable = require("formidable");
const slugify = require("slugify");

async function index(req, res) {
  const filterCriteria = { isActive: true };
  if (req.query.includeinactive) {
    delete filterCriteria.isActive;
  }
  const categories = await Category.find(filterCriteria);
  return res.json({ categories });
}

async function show(req, res) {
  const category = await Category.findOne({ slug: req.params.slug });
  return res.json({ category });
}

async function store(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.json(err);
    const newCategory = new Category({
      name: fields.name,
      photo: files.photo.newFilename,
      isActive: true,
      slug: slugify(`${fields.name}`, { lower: true }),
    });
    newCategory.save();
    return res.json(newCategory);
  });
}

async function update(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.json(err);

    const updated = {
      name: fields.name,
      photo: files.photo.newFilename,
      slug: slugify(`${fields.name}`, { lower: true }),
    };

    const updatedProduct = await Category.findOneAndUpdate({ slug: req.params.slug }, updated, {
      new: true,
    });
    return res.json({ updatedProduct });
  });
}

async function destroy(req, res) {
  const category = await Category.findOne({ slug: req.params.slug });
  const products = await Product.find({ category: category._id });
  for (let product of products) {
    product.isActive = false;
    product.save();
  }
  category.isActive = !category.isActive;
  category.save();
  if (category.isActive) {
    res.json({
      msg: "La categoría se habilitó correctamente, recuerda habilitar los productos que desees",
    });
  } else {
    res.json({
      msg: "La categoría, y productos pertenecientes a ella se deshabilitaron correctamente",
    });
  }
}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
