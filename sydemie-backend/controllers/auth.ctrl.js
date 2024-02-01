const User = require("../models/inscription");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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

// exports.connexion = async (req, res) => {
//   if (!req.body.email || !req.body.password) {
//     res.json({ message: "remlir le champs svpp" });
//   } else {
//     const verifyMails = await User.findAll();
//     console.log(verifyMails);
//     try {
//       const verifyMail = await User.findOne({
//         where: { email: req.body.email },
//       });
//       console.log(verifyMail);
//       if (!verifyMail) {
//         res.json({ message: "email existe pas , inscrivez vous " });
//       } else {
//         const mail = { email: req.body.email };
//         const { password: hash, ...rest } = verifyMail.dataValues;
//         console.log("------------------");
//         console.log(rest);
//         console.log("------------------");
//         jwt.sign(mail, process.env.JWT_SECRET, (err, result) => {
//           if (err) {
//             res.json({ error: err });
//           } else {
//             res.json({ token: result, message: "Bienvenueee free" });
//           }
//         });
//       }
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({
//         message: "Une erreur s'est produite lors de l'inscription.",
//       });
//     }
//   }
// };

exports.connexion = async (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.json({ message: "remlir le champs svpp" });
  } else {
    const verifyMails = await User.findAll();
    console.log(verifyMails);
    try {
      const verifyMail = await User.findOne({
        where: { email: req.body.email },
      });
      console.log(verifyMail);
      if (!verifyMail) {
        res.json({ message: "email existe pas , inscrivez vous " });
      } else {
        const mail = { email: req.body.email };

        const token = jwt.sign(mail, process.env.JWT_SECRET);
        const { password: hash, ...rest } = verifyMail.dataValues;
        const expiryDate = new Date(Date.now() + 3600000); // 1 hour

        res
          .cookie("access_tokenfff", token, {
            httpOnly: true,
            expires: expiryDate,
          })
          .status(200)
          // .json({ token: token, rest: rest, message: "ggggg" });
          .json({ rest, auth: true });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({
        message: "Une erreur s'est produite lors de l'inscription.",
      });
    }
  }
};

// // exports.connexion = async (req, res) => {
// //   if (!req.body.email || !req.body.password) {
// //     res.json({ message: "remlir le champs svpp" });
// //   } else {
// //     const verifyMails = await User.findAll();
// //     console.log(verifyMails);
// //     try {
// //       const verifyMail = await User.findOne({
// //         where: { email: req.body.email },
// //       });
// //       console.log(verifyMail);
// //       if (!verifyMail) {
// //         res.json({ message: "email existe pas , inscrivez vous " });
// //       } else {
//     const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
//     const { password: hashedPassword, ...rest } = validUser.dataValues;
//     const expiryDate = new Date(Date.now() + 3600000); // 1 hour
//     res
//       .cookie("access_token", token, { httpOnly: true, expires: expiryDate })
//       .status(200)
//       .json(rest);
//   } catch (error) {
//     next(error);
//   }
// };
