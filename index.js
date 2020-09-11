const express = require("express");
const port = 8000;
const app = express();
const db = require("./config/mongoose");

//include routes here
app.use("/", require("./routes"));

app.listen(port, (err) => {
  if (err) {
    console.log("error in connecting on port= ", port);
    return;
  }
  console.log("Connected to the port = ", port);
});
