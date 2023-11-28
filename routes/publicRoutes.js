const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/pagesController");

router.get("/featured", pagesController.showHome);

module.exports = router;
