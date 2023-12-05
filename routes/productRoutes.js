const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

router.get("/", productsController.index);
// router.get("/crear", userController.create);
 router.get("/:slug", productsController.show);
 router.post("/", productsController.store);
// router.get("/editar/:id", userController.edit);
 router.patch("/:slug", productsController.update);
// router.delete("/:id", userController.destroy);

module.exports = router;