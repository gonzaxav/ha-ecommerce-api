const { id } = require("date-fns/locale");
const Product = require("../models/Product");
const formidable = require("formidable");
const slugify = require("slugify");
const Category = require("../models/Category")

// Display a listing of the resource.
async function index(req, res) {
  console.log(req.params);
  const category = await Category.findOne({slug: req.params.slug});
  const products = await Product.find({ category: category._id });
  return res.json({ products });
}

// Display the specified resource.
async function show(req, res) {
  const product = await Product.findOne({slug: req.params.slug});
  return res.json({ product });
}

// Show the form for creating a new resource
async function create(req, res) {}

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
    newProduct.slug = newProduct.slug = slugify(`${newProduct.name}+${newProduct._id}`);
    newProduct.save();

    return res.json(newProduct);
  });
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {
  const product = await Product.findById();
}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
