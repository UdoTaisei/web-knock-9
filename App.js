const express = require("express");
const app = express();

const PORT = process.env.PORT;

app.get("/", (req, res) => {
  aaaaaaaa
  res.type("text").send("Hello, Render");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
