/**
 * El seeder no es más que un archivo que contiene una función que se encarga
 * de insertar datos (generalmente de prueba) en una base de datos.
 *
 * El nombre "seeder" es una convención y significa "semillero".
 *
 * Además, en este caso, se está usando una librería llamada Faker
 * (https://fakerjs.dev/) para facilitar la creación de datos ficticios como
 * nombres, apellidos, títulos, direcciones y demás textos.
 *
 * Suele ser común que en los seeders exista un `for` donde se define la
 * cantidad de registros de prueba que se insertarán en la base de datos.
 *
 */

const Product = require("../models/Product");
const Category = require("../models/Category");

module.exports = async () => {
  const products = [
    {
      name: "Cafe en grano",
      description: "Cafe de mejor calidad",
      photo: ["cafe-en-grano.png"],
      price: "200",
      stock: 49,
      category: "Cafe",
      featured: true,
      slug: "cafe-en-grano",
    },
    {
      name: "Alfajores",
      description: "Alfajores traidos de Francia",
      photo: ["alfajores.png"],
      price: "250",
      stock: 67,
      category: "Postre",
      featured: false,
      slug: "alfajores",
    },
    {
      name: "Bolistas",
      description: "Es el producto ideal para ella!",
      photo: ["bolistas.png"],
      price: "400",
      stock: 37,
      category: "Merch",
      featured: false,
      slug: "bolistas-dia-madre",
    },
    {
      name: "Cafetera Italiana",
      description: "Cafeteria de mejor calidad",
      photo: ["vialetti.png"],
      price: "1500",
      stock: 37,
      category: "Cafe",
      featured: true,
      slug: "cafetera-italiana",
    },
    {
      name: "Jarra Termica",
      description: "Nunca baja temperatura",
      photo: ["jarra-termica.png"],
      price: "900",
      stock: 37,
      category: "Cafe",
      featured: true,
      slug: "jarra-termica",
    },
    {
      name: "Vaso",
      description: "Vaso biodegradable",
      photo: ["vaso.png"],
      price: "50",
      stock: 37,
      category: "Cafe",
      featured: true,
      slug: "vaso",
    },
  ];

  const ProductsForDB = [];
  for (let product of products) {
    const productsCategory = await Category.findOne({ name: product.category });
    product.category = productsCategory._id;
    ProductsForDB.push(new Product(product));
  }

  await Product.insertMany(ProductsForDB);
  console.log("[Database] Se corrió el seeder de Products.");
};
