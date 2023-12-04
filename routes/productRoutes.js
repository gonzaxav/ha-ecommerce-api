const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

router.get("/category/:slug", productsController.index);
// router.get("/crear", userController.create);
 router.get("/:slug", productsController.show);
 router.post("/", productsController.store);
// router.get("/editar/:id", userController.edit);
// router.patch("/:id", userController.update);
// router.delete("/:id", userController.destroy);

module.exports = router;