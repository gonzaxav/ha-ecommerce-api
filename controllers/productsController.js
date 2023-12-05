const { id } = require("date-fns/locale");
const Product = require("../models/Product");
const formidable = require("formidable");
const slugify = require("slugify");
const Category = require("../models/Category");

// Display a listing of the resource.
async function index(req, res) {
  const filterCriteria = {};
  if (req.query.slug) {
    const category = await Category.findOne({ slug: req.query.slug });
    filterCriteria.category = category._id;
  }
  if (req.query.featured) {
    filterCriteria.featured = true;
  }
  const products = await Product.find(filterCriteria);
  return res.json({ products });
}

// Display the specified resource.
async function show(req, res) {
  const product = await Product.findOne({ slug: req.params.slug });
  return res.json({ product });
}

// Store a newly created resource in storage.
async function store(req, res) {
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.json(err);
    const newProduct = new Product({
      name: fields.name,
      description: fields.description,
      price: fields.price,
      stock: fields.stock,
      category: fields.category,
      featured: fields.featured,
      photo: files.photo.newFilename,
    });
    newProduct.slug = newProduct.slug = slugify(`${newProduct.name} ${newProduct._id}`);
    newProduct.save();

    return res.json(newProduct);
  });
}

// Update the specified resource in storage.
async function update(req, res) {
  const product = await Product.findOne({ slug: req.params.slug });
  const form = formidable({
    multiples: true,
    uploadDir: __dirname + "/../public/img",
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) return res.json(err);

    const updated = {
      name: fields.name,
      description: fields.description,
      price: fields.price,
      stock: fields.stock,
      category: fields.category,
      featured: fields.featured,
      photo: files.photo.newFilename,
    };
    update.slug = slugify(`${fields.name} ${product._id}`);
    const updatedProduct = await Product.findOneAndUpdate({ slug: req.params.slug }, updated, {new: true});
    return res.json({ updatedProduct });
  });
}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
