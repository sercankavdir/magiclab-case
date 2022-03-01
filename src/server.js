require("dotenv").config();
require("./db");

const express = require("express");
const route = require("./route");

const app = express();
app.use("/", route);

app.listen(8080, () => {
  console.log("Server is up on port 8080.");
});
