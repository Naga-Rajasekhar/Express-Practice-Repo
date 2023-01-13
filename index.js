const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World, Raja");
});

app.get("/raja", (req, res) => {
  res.send("instagram");
});

app.get("/features", (req, res) => {
  res.send("<h1>Test Runner Built for Humans</h1>");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
