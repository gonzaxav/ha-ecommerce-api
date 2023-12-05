const Admin = require("../models/Admin");

// Display a listing of the resource.
async function index(req, res) {
  const admins = await Admin.find();
  return res.json({ admins });
}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  const admin = await Admin.findOne({ email: req.body.email });
  if (admin) {
    return res.json({ msg: "Ya existe un admin con ese email" });
  } else {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newAdmin = await Admin.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hashedPassword,
    });
    return res.json({ newAdmin });
  }
}

// Show the form for editing the specified resource.
async function edit(req, res) {}

// Update the specified resource in storage.
async function update(req, res) {}

// Remove the specified resource from storage.
async function destroy(req, res) {}

// Otros handlers...
// ...

module.exports = {
  index,
  show,
  create,
  store,
  edit,
  update,
  destroy,
};
