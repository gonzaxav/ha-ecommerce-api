const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

const { expressjwt: checkJwt } = require("express-jwt");

const checkToken = checkJwt({
  secret: process.env.JWT_SECRET,
  algorithms: [process.env.JWT_ALGORITHMS],
});
const checkAdminToken = checkJwt({
    secret: process.env.JWT_ADMIN_SECRET,
    algorithms: [process.env.JWT_ALGORITHMS],
  })

router.get("/", orderController.index);
// router.get("/crear", orderController.create);
router.get("/:id", orderController.show);
router.post("/", checkToken, orderController.store);
// router.get("/editar/:id", orderController.edit);
router.patch("/:id", orderController.update);
// router.delete("/:id", orderController.destroy);

module.exports = router;
