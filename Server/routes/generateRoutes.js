const { generatePost } = require("../controllers/generateController");
const auth = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.post("/", auth, generatePost);

module.exports = router;
