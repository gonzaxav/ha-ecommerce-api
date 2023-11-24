const Client = require("../models/Client");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function newToken(req, res) {
  const client = await Client.findOne({ email: req.body.email });
  if (!client) return res.json({ msg: "Wrong Credentials" });

  const verifyPassword = await bcrypt.compare(req.body.password, client.password);
  if (!verifyPassword) return res.json({ msg: "Wrong Credentials" });

  const token = jwt.sign({ sub: client._id }, process.env.JWT_SECRET);

  return res.json({ token });
}

module.exports = {
  newToken,
};
