const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

const { expressjwt: checkJwt } = require("express-jwt");

const checkToken = checkJwt({
  secret: process.env.JWT_SECRET,
  algorithms: [process.env.JWT_ALGORITHMS],
});
router.use(checkToken);

router.get("/", orderController.index);
// router.get("/crear", userController.create);
//router.get("/:id", productsController.show);
// router.post("/", userController.store);
// router.get("/editar/:id", userController.edit);
// router.patch("/:id", userController.update);
// router.delete("/:id", userController.destroy);

module.exports = router;
