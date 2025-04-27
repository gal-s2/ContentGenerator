const Post = require("../models/Post");

async function savePost(req, res) {
    try {
        const { title, content } = req.body;
        const author = req.user._id;

        if (!title || !content || !author) {
            return res.status(500).json({ error: "missing post data" });
        }

        const addedPost = new Post({ title, content, author });
        await addedPost.save();

        return res.status(200).json({ success: true, post: addedPost });
    } catch (e) {
        res.status(500).json({ error: "Error in saving post" });
    }
}

async function getUserPosts(req, res) {
    try {
        const userId = req.user._id;
        const posts = await Post.find({ author: userId });
        res.status(200).json(posts);
    } catch (e) {
        res.status(500).json({ error: `Failed fetching posts of user ${userId}` });
    }
}

async function getPostById(req, res) {
    try {
        const postId = req.params.id;
        const post = await Post.findById(postId);
        res.status(200).json(post);
    } catch (e) {
        res.status(500).json({ error: `Failed fetching posts of user ${userId}` });
    }
}

module.exports = {
    savePost,
    getUserPosts,
    getPostById,
};
