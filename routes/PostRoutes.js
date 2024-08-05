const express = require("express");
const router = express();

const postCtrl = require("../controllers/PostsCtrl");

router.get("/posts", postCtrl.getAllPosts);
router.post("/new-post", postCtrl.createPost);

module.exports = router;