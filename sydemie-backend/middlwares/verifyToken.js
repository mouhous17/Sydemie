const jwt = require("jsonwebtoken");

// Définissez votre clé secrète pour signer les tokens

function verifyToken(req, res) {
  const token = req.headers["authorization"];
  console.log(token);
  if (!token) {
    return res.status(401).json({ error: "Token non fourni" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: "Token invalide" });
    }

    req.user = decoded;
  });
}

module.exports = verifyToken;
