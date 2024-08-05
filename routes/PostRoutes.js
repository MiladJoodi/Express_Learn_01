const express = require("express");
const router = express();

const postCtrl = require("../controllers/PostsCtrl");

// MiddleWare
const midClg = require("../middleware/clgMid")

router.get("/posts", midClg, postCtrl.getAllPosts);
router.post("/new-post", postCtrl.createPost);
router.get("/get-one-post/:id", postCtrl.getOnePost);
router.post("/update-post/:id", postCtrl.updatePost);
router.post("/remove-post/:id", postCtrl.removePost);

module.exports = router;