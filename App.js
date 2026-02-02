const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
  res.type("text").send("Hello, Render!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
