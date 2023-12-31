/**
 * Este archivo se encarga de importar todos los seeders que se hayan definido
 * en el sistema y ejectuarlos.
 *
 * Para ejecutar este archivo se debe correr el comando:
 *
 * 👉 node seeders/runAllSeeders.js
 *
 *
 * Como alternativa, en el artchivo package.json se creó un comando "alias"
 * para que la ejecución sea un poco más corta:
 *
 * 👉 npm run seeders
 *
 */

require("dotenv").config();

async function runAllSeeders() {
  /**
   * Opcional. Si se quiere borrar toda la base de datos antes ejecutar los
   * seeders, descomentar las siguientes dos (2) líneas de código.
   *
   * PD: El método `dropDatabase` de Mongoose elimina toda la base de datos.
   */

  const { mongoose } = require("../db");
  await mongoose.connection.dropCollection("admins");
  await mongoose.connection.dropCollection("categories");
  await mongoose.connection.dropCollection("clients");
  await mongoose.connection.dropCollection("orders");
  await mongoose.connection.dropCollection("products");

  // Seeders:
  await require("./adminSeeder")();
  await require("./clientSeeder")();
  await require("./categorySeeder")();
  await require("./productSeeder")();
  await require("./orderSeeder")();

  console.log("[Database] ¡Los datos de prueba fueron insertados!");
  process.exit();
}

runAllSeeders();
