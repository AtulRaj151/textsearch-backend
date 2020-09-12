let Questions = require("../../../models/question");
module.exports.searchQuestionByTagsOrQuery = async (req, res) => {
  try {
    let tags = req.body.tags
      .split(/[\s,]+/)
      .map((item) => item.toLowerCase())
      .filter((item) => item.length != 0);

    let quest = await Questions.find({ tags: { $in: tags } });
    let quest2 = await Questions.find({
      $text: { $search: req.body.tags },
    });
    console.log(quest.length);
    // if quest tag length is 0
    if (quest.length == 0) {
      //if quest2 query is also 0
      if (quest2.length == 0) {
        //   no result found
        return res.status(404).json({
          message: "not found",
          question: [],
        });
      }

      //   return the query
      return res.status(200).json({
        question: quest2,
      });
    }
    //return the result
    return res.status(200).json({
      question: quest,
    });
  } catch (error) {
    return res.status(502).json({
      message: "error",
    });
  }
};

module.exports.searchQuestionByQuery = async (req, res) => {};
