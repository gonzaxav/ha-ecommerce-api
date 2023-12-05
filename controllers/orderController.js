const Order = require("../models/Order");

// Display a listing of the resource.
async function index(req, res) {
  const orders = await Order.find();
  return res.json({ orders });
}

// Display the specified resource.
async function show(req, res) {}

// Show the form for creating a new resource
async function create(req, res) {}

// Store a newly created resource in storage.
async function store(req, res) {
  const order = await Order.create({
    client: req.auth.sub,
    products: req.body.products,
    orderstate: "pago pendiente",
  });

  return res.json(order);
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
