const express = require("express");
const router = express.Router();
//import insert controller
const insertController = require("../../../controller/api/v1/insertQuestions");
const searchController = require("../../../controller/api/v1/searchController");
const fetchQuestionController = require("../../../controller/api/v1/fetchQuestions");
//routes for insert questions
router.post("/insert", insertController.insertQues);
// routes for search questions by tags
router.post("/search/tags", searchController.searchQuestionByTagsOrQuery);
// get all the questions
router.get("/questions", fetchQuestionController.fetchAllQuestions);
module.exports = router;
