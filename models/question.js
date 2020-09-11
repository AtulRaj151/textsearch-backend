const mongoose = require("mongoose");
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
