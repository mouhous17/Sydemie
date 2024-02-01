const express = require("express");
const connexionForm = require("../controllers/auth.ctrl");
const userController = require("../controllers/auth.ctrl");
const verifyToken = require("../middlwares/verifyToken");

const router = express.Router();

router.post("/connexion", connexionForm.connexion);
router.post("/inscription", userController.formulaire);

module.exports = router;
