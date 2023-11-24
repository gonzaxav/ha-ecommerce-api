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

module.exports = async () => {

  const categories = [{
    name: "Cafe",
    photo: "cafe.png",
  },{
    name: "Postre",
    photo: "alfajores.png",
  },{
    name: "Merch",
    photo: "bolistas.png",
  }];

  const CategoriesForDB = [];
  for (let category of categories){
    CategoriesForDB.push(new Category(category));
  }

  await Category.insertMany(CategoriesForDB);
  console.log("[Database] Se corrió el seeder de Category.");
};
