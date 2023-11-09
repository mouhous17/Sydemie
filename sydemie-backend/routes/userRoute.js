const express = require("express");
const userController = require("../controllers/userControl");

const router = express.Router();

router.post("/", userController.formulaire);

module.exports = router;
