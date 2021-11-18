const express = require("express");
const { dirname } = require("path");
const app = express();
const port = 4000;
const path = require("path");
const logger = (req, res, next) => {
  const today = new Date();
  if (today.getDay() === 0 || today.getDay() === 2) {
    return res.sendFile(path.join(__dirname, "/public/404/index.html"));
  }
  next();
};
app.use(logger);
app.use(express.static("public"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
