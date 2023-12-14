const { id } = require("date-fns/locale");
const Product = require("../models/Product");
const formidable = require("formidable");
const slugify = require("slugify");
const Category = require("../models/Category");
const {createClient} = require("@supabase/supabase-js");
const fs = require("fs");
const path = require("path");

// Display a listing of the resource.
async function index(req, res) {
  const filterCriteria = {isActive: true};
  if (req.query.slug) {
    const category = await Category.findOne({ slug: req.query.slug });
    filterCriteria.category = category._id;
  }
  if (req.query.featured) {
    filterCriteria.featured = true;
  }
  if (req.query.includeinactive) {
    delete filterCriteria.isActive
  }
  if (req.query.buscar){
    const searchTerm = req.query.buscar;
    
    if (searchTerm && searchTerm !== "") {
      const regex = new RegExp(searchTerm, 'i');
      if (searchTerm.match(/^[0-9a-fA-F]{24}$/)) {
        filterCriteria.$or = [
          { _id: searchTerm },
          { category: searchTerm },
        ];
      } else {
        filterCriteria.$or = [
          { name: regex },
          { description: regex },
          { price: regex },
          { shortDescription: regex },
        ];
      }
    }
  }
  const products = await Product.find(filterCriteria).populate("category");
  return res.json({ products });
}

// Display the specified resource.
async function show(req, res) {
  const product = await Product.findOne({ slug: req.params.slug }).populate("category");
  return res.json({ product });
}

// Store a newly created resource in storage.
async function store(req, res) {
  const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY
  );
  const form = formidable({
    multiples: true,
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    const ext = path.extname(files.photo.filepath);
    const newFileName = `image_${Date.now()}${ext}`;
    
    const { data, error } = await supabase.storage
    .from("img")
    .upload(newFileName, fs.createReadStream(files.photo.filepath), {
      cacheControl: "3600",
      upsert: false,
      contentType: files.photo.mimetype,
      duplex: "half",
    });

    if (err) return res.json(err);
    const newProduct = new Product({
      name: fields.name,
      description: fields.description,
      price: fields.price,
      stock: fields.stock,
      category: fields.category,
      featured: fields.featured === "true" ? true : false,
      shortDescription: fields.shortDescription,
      photo: newFileName,
      isActive: true,
    });
    newProduct.slug = slugify(`${newProduct.name} ${newProduct._id}`);
    newProduct.save();

    return res.json(newProduct);
  });
}

// Update the specified resource in storage.
async function update(req, res) { //manejar update de stock al confirmar la orden, ej. mandar ?stock=true por query y hacer condicional para el update
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
      featured: fields.featured === "true" ? true : false,
      shortDescription: fields.shortDescription,
      photo: files.photo.newFilename,

    };
    update.slug = slugify(`${fields.name} ${product._id}`);
    const updatedProduct = await Product.findOneAndUpdate({ slug: req.params.slug }, updated, {new: true});
    return res.json({ updatedProduct });
  });
}

// Remove the specified resource from storage.
async function destroy(req, res) {
  const product = await Product.findOne({slug: req.params.slug});
  product.isActive = !product.isActive;
  product.save();
  if(product.isActive){
    return res.json({msg: "El producto se habilitó correctamente"});
  } else {
    return res.json({msg: "El producto se deshabilitó correctamente"});
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
