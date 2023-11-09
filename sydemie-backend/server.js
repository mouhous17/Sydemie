const express = require("express");
const app = express();
const cors = require("cors");
const sequelize = require("./config");
require("dotenv").config();

app.use(express.json());
app.use(cors());

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

const verifyToken = require("./middlwares/verifyToken");

// const data = [
//   {
//     nom: "sudou",
//     prenom: "khra",
//   },
//   { nom: "hmida", prenom: "tnaket" },
// ];
// app.get("/soso", verifyToken, (req, res) => {
//   res.json(data);
// });
const userRoute = require("./routes/userRoute");
const connexion = require("./routes/connexion");

app.use("/inscription", userRoute);
app.use("/connexion", connexion);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur en cours d'écoute sur le port ${port}`);
});
