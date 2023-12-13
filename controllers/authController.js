const Client = require("../models/Client");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

async function newToken(req, res) {
  const client = await Client.findOne({ email: req.body.email });
  if (!client) return res.json({ msg: "Usuario y/o contraseña incorrectos" });

  const verifyPassword = await bcrypt.compare(req.body.password, client.password);
  if (!verifyPassword) return res.json({ msg: "Usuario y/o contraseña incorrectos" });

  const token = jwt.sign({ sub: client._id }, process.env.JWT_SECRET);

  return res.json({ token, client });
}

async function adminToken(req, res) {
  const admin = await Admin.findOne({ email: req.body.email });
  if (!admin) return res.json({ msg: "Usuario y/o contraseña incorrectos" });

  const verifyPassword = await bcrypt.compare(req.body.password, admin.password);
  if (!verifyPassword) return res.json({ msg: "Usuario y/o contraseña incorrectos" });

  const token = jwt.sign({ sub: admin._id }, process.env.JWT_ADMIN_SECRET);

  return res.json({ token });
}

module.exports = {
  newToken,
  adminToken,
};
