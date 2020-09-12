const question = require("../../../models/question");
const Questions = require("../../../models/question");
module.exports.insertQues = async (req, res) => {
  //   console.log("inserted questions", req.body);

  //   split the tags and trim the spaces and convert it into Lower Case

  // add question to the databases

  try {
    let tags = req.body.tags
      .split(/[\s,]+/)
      .map((item) => item.toLowerCase())
      .filter((item) => item.length != 0);
    let ques = await Questions.create({
      question: req.body.question,
      topic: req.body.topic,
      tags,
    });

    return res.status(200).json({
      message: "Success",
    });
  } catch (error) {
    return res.status(401).json({
      message: "error",
    });
  }
};
