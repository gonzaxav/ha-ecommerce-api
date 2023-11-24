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

module.exports = async () => {
  const products = [];

  const product1 = new Product({
    name: "Kopi Luwak",
    description: "Coffee made from beans that have been digested by a civet cat",
    photo: [],
    price: "800",
    stock: 49,
    category: "Cafe",
    featured: true,
    slug: "kopi-luwak",
  });
  products.push(product1);

  const product2 = new Product({
    name: "Torta de frutilla",
    description: "Torta de frutillas traidas de Francia",
    photo: [],
    price: "480",
    stock: 67,
    category: "Postre",
    featured: true,
    slug: "torta-frutilla",
  });
  products.push(product2);

  const product3 = new Product({
    name: "Canasta para dia de la madre",
    description:
      "Tu madre es adicta al cafe? Le encanta los postres y no puede parar de comerlos? Le gusta que le lleven la comida a la cama? este es el producto ideal para ella!",
    photo: [],
    price: "960",
    stock: 37,
    category: "Kits de regalo",
    featured: true,
    slug: "canasta-dia-madre",
  });
  products.push(product3);

  await Product.insertMany(products);
  console.log("[Database] Se corrió el seeder de Products.");
};
