module.exports = app => {
  const result = require("../controllers/result.controllers.js");

  app.post("/results", result.create);

  app.get("/results", result.findAll);

  app.get("/results/:id", result.findOne);
};
