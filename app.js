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
app.get("/secret", (req, res) => {
  const password = req.query.password;
  if (password === "3.14159265") {
    res.json({
      message: "you found the secret message",
    });
  } else if (password == undefined) {
    res.json({
      message:
        "you need to attach the password in the url to access the secret",
    });
  } else {
    res.json({
      message: "wrong password, try again",
    });
  }
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
