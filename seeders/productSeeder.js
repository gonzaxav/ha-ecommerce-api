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
      name: "Kopi Luwak",
      description: "Coffee made from beans that have been digested by a civet cat",
      photo: ["cafe.png"],
      price: "800",
      stock: 49,
      category: "Cafe",
      featured: true,
      slug: "kopi-luwak",
    },
    {
      name: "Alfajores",
      description: "Alfajores traidos de Francia",
      photo: ["alfajores.png"],
      price: "480",
      stock: 67,
      category: "Postre",
      featured: true,
      slug: "torta-frutilla",
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
