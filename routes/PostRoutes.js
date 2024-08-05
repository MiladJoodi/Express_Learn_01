const express = require("express");
const router = express();

const postCtrl = require("../controllers/PostsCtrl");

router.get("/posts", postCtrl.getAllPosts);
router.post("/new-post", postCtrl.createPost);
router.get("/get-one-post/:id", postCtrl.getOnePost);
router.post("/update-post/:id", postCtrl.updatePost);
router.post("/remove-post/:id", postCtrl.removePost);

module.exports = router;