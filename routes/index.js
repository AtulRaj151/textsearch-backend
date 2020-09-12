const expresss = require("express");
const router = expresss.Router();
const homeController = require("../controller");
router.get("/", homeController.home);
router.use("/api", require("./api"));
module.exports = router;
