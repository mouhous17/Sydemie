const express = require("express");
const connexionForm = require("../controllers/connexion");
const verifyToken = require("../middlwares/verifyToken");

const router = express.Router();

router.post("/", connexionForm.connexion);

module.exports = router;
