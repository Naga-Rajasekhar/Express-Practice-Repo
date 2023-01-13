const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.status(200).send("Hello World, Rajasekhar");
});

app.get("/raja", (req, res) => {
  res.send("instagram");
});

app.get("/features", (req, res) => {
  res.send("<h1>Test Runner Built for Humans</h1>");
});

app.get("/features/followers", (req, res) => {
  res.send("<h2>600K</h2>");
});

app.get("/example", (req, res) => {
  const objExp = {
    surName: "Naga",
    firstName: "Raja",
    lastName: "Sekhar",
  };
  res.status(200).json({ objExp });
});

app.get("/home/login/:token", (req, res) => {
  console.log(req.params.token);
  res.status(200).status({ param: req.params.token });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
