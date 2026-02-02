const express = require("express");
const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.type("text").send(`Hello, Render ${process.env.kadai_number || "varError"}!`);
});

app.get("/api/hello", (req, res) => {
  res.json({message: "Hello!"});
});

app.get("/about", (req, res) => {
  res.type("text").send("This is /about page.");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
