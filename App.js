const express = require("express");
const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.type("text").send(`Hello, Render ${process.env.var_env}!`);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
