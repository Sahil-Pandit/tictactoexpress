const express = require('express');
const bP = require("body-parser");
const app = express();

app.use(bP.json());
app.use(bP.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('hello darkness my old friend');
});

require("./routes/results.routes.js")(app);
require("./routes/history.routes.js")(app);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
