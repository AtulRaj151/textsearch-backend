const { response } = require("express");
const Questions = require("../../../models/question");
module.exports.fetchAllQuestions = async (req, res) => {
  try {
    let quest = await Questions.find({});
    return res.status(200).json({
      questions: quest,
      message: "success",
    });
  } catch (error) {
    return res.status(502).json({
      message: "error",
    });
  }
};
