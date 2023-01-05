require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  const PI = 3.14159265;
  res.json({
    message: "The value of PI",
    value: PI,
  });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
