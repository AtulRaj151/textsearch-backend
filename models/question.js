const mongoose = require("mongoose");
const { model } = require("../config/mongoose");
const QuestionSchema = mongoose.Schema({
  question: {
    type: String,
    require: true,
  },
  topic: {
    type: String,
    requrire: true,
  },
  tags: [{ type: String }],
});

module.exports = mongoose.model("Questions", QuestionSchema);
