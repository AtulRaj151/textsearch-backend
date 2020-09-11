const expresss = require("express");
const router = expresss.Router();
const homeController = require("../controller");
router.get("/", homeController.home);

module.exports = router;
