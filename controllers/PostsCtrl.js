const Post = require("../models/Post");

// GET
const getAllPosts = async (req, res) => {

    try {

        const allPosts = await Post.find();
        allPosts.reverse();

        res.status(200).json(allPosts)
    } catch {
        res.status(400).json({ msg: "Error" })
    }

}
module.exports.getAllPosts = getAllPosts;

// POST
const createPost = async (req, res) => {
    try {
        console.log(req.body)
        const postData = req.body;
        await Post.create(postData);
        res.status(200).json({ msg: "Post Created" })
    } catch(e) {
        console.log(e)
        res.status(400).json({ msg: "Error" })
    }

}
module.exports.createPost = createPost;

// ONE POST
const getOnePost = async (req, res) => {

    try {
        // const thePost = await Post.findById(req.body.goalId);
        res.status(200).json(req.params.id)
    } catch {
        res.status(400).json({ msg: "Error" })
    }

}
module.exports.getOnePost = getOnePost;
