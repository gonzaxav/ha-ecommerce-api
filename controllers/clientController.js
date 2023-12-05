const Client = require("../models/Client");
const bcrypt = require("bcryptjs");

// Display a listing of the resource.
async function index(req, res) {}

// Display the specified resource.
async function show(req, res) {}



// Store a newly created resource in storage.
async function store(req, res) {
  const client = await Client.findOne({email: req.body.email});
  if(client){
    return res.json({msg:"Ya existe un usuario con ese email"})
  } else {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    const newClient = await Client.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hashedPassword,
      address: req.body.address,
      phone: req.body.phone,
      orders: []
    })
    return res.json({newClient});
  }
}





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
