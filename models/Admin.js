const { mongoose, Schema } = require("../db");

const adminSchema = new Schema({
  firstname: String,
  lastname: String,
  email: { type: String, required: true, unique: true },
  password: String,
});

adminSchema.methods.toJSON = function () {
  const admin = this.toObject();
  delete admin.password;
  return admin;
};

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;