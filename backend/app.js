var express = require("express");
var cors = require("cors");

var app = express();
app.use(cors());

app.get("/api/getData", function (req, res) {
  res.status(200);
  res.send({ data: "Hi, Team Devkode!" });
});

app.listen(8000, function () {
  console.log("API microservice listening on port 8000!");
});
