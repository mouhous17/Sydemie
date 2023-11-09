// config.js
const { Sequelize } = require("sequelize");

let sequelize = new Sequelize("sydemie", "root", "root", {
  host: "localhost",

  dialect: "mariadb",
});
(async () => {
  await sequelize.sync({ force: false });
})();

module.exports = sequelize;
