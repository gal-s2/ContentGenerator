const router = require("express").Router();
const auth = require("../middlewares/authMiddleware");
const { savePost, getPostById, getUserPosts } = require("../controllers/postsController");

router.post("/save", auth, savePost);
router.get("/user", auth, getUserPosts);
router.get("/:id", auth, getPostById);

module.exports = router;
