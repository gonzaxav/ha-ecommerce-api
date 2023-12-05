const { mongoose, Schema } = require("../db");

const adminSchema = new Schema({
  firstname: String,
  lastname: String,
  email: { type: String, required: true, unique: true },
  password: String,
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;