const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`Hello, Render ${process.env.kadai_number || "varError"}!`);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
