module.exports = app => {
  const history = require("../controllers/move.controllers.js");

  app.post("/history", history.create);

  app.get("/history", history.findAll);

  app.get("/history/:id", history.findOne);
};
