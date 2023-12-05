const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.get("/", adminController.index);
// router.get("/crear", adminController.create);
// router.get("/:id", adminController.show);
// router.post("/", adminController.store);
// router.get("/editar/:id", adminController.edit);
// router.patch("/:id", adminController.update);
// router.delete("/:id", adminController.destroy);

module.exports = router;
