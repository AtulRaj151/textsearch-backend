const express = require("express");
const port = 8000;
const app = express();
const db = require("./config/mongoose");
const cors = require("cors");

//use body parser
app.use(cors());
app.use(express.urlencoded());

//include routes here
app.use("/", require("./routes"));

//listen to the ports
app.listen(port, (err) => {
  //error
  if (err) {
    console.log("error in connecting on port= ", port);
    return;
  }

  console.log("Connected to the port = ", port);
});
