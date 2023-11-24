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

const Client = require("../models/Client");
const bcrypt = require("bcryptjs");

module.exports = async () => {

  const clients = [];
  const hashedPassword = await bcrypt.hash("1234", 10);

  const client = new Client({
    firstname: "Cliente",
    lastname: "Pobre",
    email: "clientepobre@cliente.com",
    password: hashedPassword,
    address: "Debajo del puente 1122",
    phone: "091123456",
    orderslist: [],
  });
  clients.push(client);

  const client2 = new Client({
    firstname: "Cliente",
    lastname: "Rico",
    email: "clienterico@cliente.com",
    password: hashedPassword,
    address: "Arriba del puente 1122",
    phone: "099654321",
    orderslist: [],
  });
  clients.push(client2);

  await Client.insertMany(clients);
  console.log("[Database] Se corrió el seeder de Clients.");
};
