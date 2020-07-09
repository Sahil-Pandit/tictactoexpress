const sql = require('./db.js');

const Result = function(r) {
  this.id = r.id;
  this.winner = r.winner;
};

Result.create = (newR, result) => {
  sql.query("INSERT INTO results SET ?", newR, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("added result: ", res);
    result(null, res);
  });
};

Result.getAll = result => {
  sql.query("SELECT * FROM results", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("results: ", res);
    result(null, res);
  });
};

Result.findById = (gameN, result) => {
  sql.query(`SELECT * FROM results WHERE id = ${gameN}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found match: ", res[0]);
      result(null, res[0]);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

module.exports = Result;
