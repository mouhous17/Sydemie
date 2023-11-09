const User = require("../models/inscription");
const bcrypt = require("bcrypt");

exports.formulaire = async (req, res) => {
  if (!req.body.email || !req.body.pseudo) {
    res.json({ message: "remlir le champs svpp" });
  } else {
    const verifyMail = await User.findOne({
      where: { email: req.body.email },
    });

    if (!!verifyMail) {
      res.json({ message: "email deja existé" });
    } else {
      const crypto = require("crypto");

      const secretKey = crypto.randomBytes(32).toString("hex");
      console.log(secretKey);
      try {
        const password = req.body.password;
        const hash = await bcrypt.hash(password, 10);
        await User.create({
          pseudo: req.body.pseudo,
          email: req.body.email,
          password: hash,
        });
        res.status(200).json({ message: "All good!" });
      } catch (error) {
        console.error(error);
        res.status(500).json({
          message: "Une erreur s'est produite lors de l'inscription.",
        });
      }
    }
  }
};
