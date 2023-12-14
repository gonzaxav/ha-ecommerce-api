const Order = require("../models/Order");

// Display a listing of the resource.
async function index(req, res) {
  try {
    const searchTerm = req.query.buscar;
    
    let filter = {};
    if (searchTerm && searchTerm !== "") {
      const regex = new RegExp(searchTerm, 'i');
      if (searchTerm.match(/^[0-9a-fA-F]{24}$/)) {
        filter.$or = [
          { _id: searchTerm },
          { client: searchTerm },
        ];
      } else {
        filter.$or = [
          { orderstate: regex },
        ];
      }
    }
    const orders = await Order.find(filter).populate("client");
    return res.json({ orders });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Display the specified resource.
async function show(req, res) {
  const order = await Order.findById(req.params.id).populate("client");
  return res.json({ order });
}

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
async function update(req, res) {
  await Order.findByIdAndUpdate(req.params.id, req.body);
  return res.json({ msg: "listo" });
}

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
