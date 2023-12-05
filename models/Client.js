const { mongoose, Schema } = require("../db");

const clientSchema = new Schema({
  firstname: String,
  lastname: String,
  email: { type: String, required: true, unique: true },
  password: String,
  address: String,
  phone: String,
  orders: [{ type: Schema.Types.ObjectId, ref: "Order" }],
});

clientSchema.methods.toJSON = function () {
  const client = this.toObject();
  delete client.password;
  return client;
};

const Client = mongoose.model("Client", clientSchema);

module.exports = Client;
