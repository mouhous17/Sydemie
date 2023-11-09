const User = require("../models/inscription");

const jwt = require("jsonwebtoken");

exports.connexion = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.json({ message: "remlir le champs svpp" });
  } else {
    try {
      const verifyMail = await User.findOne({
        where: { email: req.body.email },
      });

      if (!verifyMail) {
        res.json({ message: "email existe pas , inscrivez vous " });
      } else {
        const user = { email: req.body.email };
        jwt.sign(user, process.env.JWT_SECRET, (err, result) => {
          if (err) {
            res.json({ error: err });
          } else {
            res.json({ token: result, message: "Bienvenueee free" });
          }
        });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Une erreur s'est produite lors de l'inscription.",
      });
    }
  }
};
