const express = require("express");
const router = express.Router();
//import insert controller
const insertController = require("../../../controller/api/v1/insertQuestions");
const searchController = require("../../../controller/api/v1/searchController");
//routes for insert questions
router.post("/insert", insertController.insertQues);
// routes for search questions by tags
router.post("/search/tags", searchController.searchQuestionByTagsOrQuery);
module.exports = router;
