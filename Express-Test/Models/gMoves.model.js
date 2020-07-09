const sql = require('./db.js');

const Move = function(m) {
  this.id = m.id;
  this.moveN = m.moveN;
  this.player = m.player;
  this.bS = m.bS;
}

Move.create = (mo, result) => {
  sql.query("INSERT INTO history SET ?", mo, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    console.log("added move: ", res);
    result(null, res);
  });
};

Move.getAll = result => {
  sql.query("SELECT * FROM history", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("moves: ", res);
    result(null, res);
  });
};

Move.findById = (gN, result) => {
  sql.query(`SELECT * FROM history WHERE id = ${gN}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found match: ", res);
      result(null, res);
      return;
    }

    result({ kind: "not_found" }, null);
  });
};

module.exports = Move;
