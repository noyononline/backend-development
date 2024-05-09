const express = require("express");
const swaggerUI = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDoc = YAML.load("./swagger.yaml");

const app = express();

app.use(express.json());
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDoc));

app.get("/health", (req, res) => {
  res.status(200).json({
    health: "ok",
  });
});

app.get("/api/v1/articles", (req, res) => {
  res.status(200).json({
    path: req.path,
    method: req.method,
  });
});

app.post("/api/v1/articles", (req, res) => {
  res.status(200).json({
    path: req.path,
    method: req.method,
  });
});

app.get("/api/v1/aritcles/:id", (req, res) => {
  res.status(200).json({
    path: req.path,
    method: req.method,
  });
});

app.put("/api/v1/aritcles/:id", (req, res) => {
  res.status(200).json({
    path: req.path,
    method: req.method,
  });
});

app.patch("/api/v1/aritcles/:id", (req, res) => {
  res.status(200).json({
    path: req.path,
    method: req.method,
  });
});

app.delete("/api/v1/aritcles/:id", (req, res) => {
  res.status(200).json({
    path: req.path,
    method: req.method,
  });
});

app.post("/api/v1/auth/signup", (req, res) => {
  res.status(200).json({
    path: req.path,
    method: req.method,
  });
});

app.post("/api/v1/auth/signin", (req, res) => {
  res.status(200).json({
    path: req.path,
    method: req.method,
  });
});
app.listen(4000, (req, res) => {
  console.log("Server is listening on port 4000");
});
