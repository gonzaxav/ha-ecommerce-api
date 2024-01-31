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

const Order = require("../models/Order");
const Client = require("../models/Client");
const Product = require("../models/Product");

module.exports = async () => {
  const clientRico = await Client.findOne({ lastname: "Rico" });
  const clientPobre = await Client.findOne({ lastname: "Pobre" });
  const product1 = await Product.findOne({ name: "Brasil Crucera" });
  const product2 = await Product.findOne({ name: "Café de la Casa" });
  const product3 = await Product.findOne({ name: "Filtros Reutilizables" });

  const orders = [];

  const order1 = new Order({
    client: clientRico._id,
    products: [
      { productId: product1._id, 
        name: product1.name, 
        price: product1.price, 
        qty: 2,
        slug: product1.slug,
      },
      { productId: product2._id, 
        name: product2.name, 
        price: product2.price, 
        qty: 1,
        slug: product2.slug,
      }],
    orderstate: "entregado",
  });
  orders.push(order1);
  const order2 = new Order({
    client: clientRico._id,
    products: [
      { productId: product2._id, 
        name: product2.name, 
        price: product2.price, 
        qty: 1,
        slug: product2.slug,
      }],
    orderstate: "en tránsito",
  });
  orders.push(order2);
  const order3 = new Order({
    client: clientPobre._id,
    products: [
      { productId: product3._id, 
        name: product3.name, 
        price: product3.price, 
        qty: 1,
        slug: product3.slug,
      }],
    orderstate: "pago pendiente",
  });
  orders.push(order3);

  clientRico.orders = orders;
  await clientRico.save();

  await Order.insertMany(orders);
  console.log("[Database] Se corrió el seeder de Orders.");
};
