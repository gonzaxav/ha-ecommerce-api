const Client = require("../models/Client");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Display a listing of the resource.
async function index(req, res) {
  const clients = await Client.find();
  return res.json({ clients });
}

// Display the specified resource.
async function show(req, res) {
  const client = await Client.findById(req.params.id);
  return res.json({ client });
}

// Store a newly created resource in storage.
async function store(req, res) {
  const client = await Client.findOne({ email: req.body.email });
  if (client) {
    return res.json({ msg: "Ya existe un usuario con ese email" });
  } else {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newClient = await Client.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hashedPassword,
      address: req.body.address,
      phone: req.body.phone,
      orders: [],
    });

    const client = await Client.findOne({ email: req.body.email });
    if (!client) return res.json({ msg: "Wrong Credentials" });

    const verifyPassword = await bcrypt.compare(req.body.password, client.password);
    if (!verifyPassword) return res.json({ msg: "Wrong Credentials" });

    const token = jwt.sign({ sub: client._id }, process.env.JWT_SECRET);

    return res.json({ token });
  }
}

// Update the specified resource in storage.
async function update(req, res) {
  const client = Client.findById(req.auth.sub);
}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  store,
  update,
  destroy,
};
