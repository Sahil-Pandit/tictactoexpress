const Result = require("../Models/gResult.model.js");

exports.create = (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Unlucky nobbo"
    });
  }

  const result = new Result({
    id: req.body.id,
    winner: req.body.winner
  });

  Result.create(result, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "oof"
      });
    else res.send(data);
  });
};

exports.findAll = (req, res) => {
  Result.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "oof"
        });
      else res.send(data);
    });
  };

exports.findOne = (req, res) => {
  Result.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: "Result wasn't found"
        });
      } else {
        res.status(500).send({
          message: "Error when finding match result"
        });
      }
    } else res.send(data);
  });
};
