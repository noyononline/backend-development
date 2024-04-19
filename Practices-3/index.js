const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log("Hello World");
});

app.listen(4000, (req, res) => {
  console.log("Server is running on port 4000");
});
