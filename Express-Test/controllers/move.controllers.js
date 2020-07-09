const Move = require("../Models/gMoves.model.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Unlucky nobbo"
    });
  }

  const move = new Move({
    id: req.body.id,
    moveN: req.body.moveN,
    player: req.body.player,
    bS: JSON.stringify(req.body.bS)
  });

  Move.create(move, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "oof"
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  Move.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "oof"
        });
      else res.send(data);
    });
  };

exports.findOne = (req, res) => {
  Move.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: "Match wasn't found"
        });
      } else {
        res.status(500).send({
          message: "Error when finding match"
        });
      }
    } else res.send(data);
  });
};
