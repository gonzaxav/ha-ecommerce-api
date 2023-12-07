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

const Category = require("../models/Category");
const bcrypt = require("bcryptjs");
const slugify = require("slugify");

module.exports = async () => {
  const categories = [
    {
      name: "Café",
      photo: "cafe.png",
      slug: slugify("Café",{ lower: true }),
      isActive: true,
    },
    {
      name: "Carta",
      photo: "menu.png",
      slug: slugify("Carta",{ lower: true }),
      isActive: true,
    },
    {
      name: "Merch",
      photo: "merch.png",
      slug: slugify("Merch",{ lower: true }),
      isActive: true,
    },
    {
      name: "Bazar",
      photo: "bazar.png",
      slug: slugify("Bazar",{ lower: true }),
      isActive: true,
    },
    {
      name: "Máquinas",
      photo: "maquinas.png",
      slug: slugify("Máquinas",{ lower: true }),
      isActive: true,
    },
    {
      name: "Kits de regalos",
      photo: "gift_card.png",
      slug: slugify("Kits de regalos",{ lower: true }),
      isActive: true,
    },
  ];

  const CategoriesForDB = [];
  for (let category of categories) {
    CategoriesForDB.push(new Category(category));
  }

  await Category.insertMany(CategoriesForDB);
  console.log("[Database] Se corrió el seeder de Category.");
};
