const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.JAWSDB_URL);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
