const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/textSearch");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error in Databases"));
db.once("open", () => {
  console.log("connected to the databases");
});

module.exports = db;
