const express = require("express");
const router = express.Router();
const clientController = require("../controllers/clientController");
const { expressjwt: checkJwt } = require("express-jwt");

 router.get("/", clientController.index);
// router.get("/crear", userController.create);
 router.get("/:id", clientController.show);
 router.post("/", clientController.store);
// router.get("/editar/:id", userController.edit);
router.patch("/:id", checkJwt({ secret: process.env.JWT_SECRET, algorithms: [process.env.JWT_ALGORITHMS] }), clientController.update);
// router.delete("/:id", userController.destroy);

module.exports = router;
