const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");

// router.get("/", userController.index);
// router.get("/crear", userController.create);
// router.get("/:id", userController.show);
 router.post("/", clientController.store);
// router.get("/editar/:id", userController.edit);
// router.patch("/:id", userController.update);
// router.delete("/:id", userController.destroy);

module.exports = router;
