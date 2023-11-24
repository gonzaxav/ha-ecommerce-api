const { mongoose, Schema } = require("../db");

const orderStateEnum = ["pago pendiente", "rechazado", "pago", "en tránsito", "entregado"];

const orderSchema = new Schema({
  client: { type: Schema.Types.ObjectId, ref: "Client" },
  products: [{ productId: String, product: String, price: Number, qty: Number }],
  orderstate: {
    type: String,
    enum: orderStateEnum,
    default: "pago pendiente",
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;


