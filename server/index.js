const express = require("express");
const path = require("Path");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json);
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json);
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});