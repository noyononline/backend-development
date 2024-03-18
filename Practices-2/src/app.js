const express = require("express");

const app = express();

app.get("/api/calculate", (req, res) => {
  try {
    const value = parseInt(req.query.value);
    res.json({ originalValue: value, resust: fibonacci(value) });
  } catch (error) {
    res.json({ msg: "Invalid query value", value: req.query.value });
  }
});
app.listen(4000, () => {
  console.log("server is Lisitening on port 4000");
});

function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}
