const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

router.get("/", productsController.index);
// router.get("/crear", userController.create);
// router.get("/:id", userController.show);
// router.post("/", userController.store);
// router.get("/editar/:id", userController.edit);
// router.patch("/:id", userController.update);
// router.delete("/:id", userController.destroy);

module.exports = router;
