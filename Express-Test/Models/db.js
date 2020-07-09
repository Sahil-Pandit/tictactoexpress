const mysql = require("mysql");
const dbConfig = require("../Config/db.config.js");

const conn = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

conn.connect(error => {
  if (error) {
    throw error;
  }

  console.log("Successfully connected to the database.");
});

module.exports = conn;
