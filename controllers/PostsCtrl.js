const Post = require("../models/Post");

// GET
const getAllPosts = async (req, res) => {

    try {

        const allPosts = await Post.find()

        res.status(200).json(allPosts)
    } catch {
        res.status(400).json({ msg: "Error" })
    }

}
module.exports.getAllPosts = getAllPosts;

// POST
const createPost = async (req, res) => {
    try {

        const postData={
            title: "post 1",
            viewNum: 4
        }

        await Post.create(postData);
        res.status(200).json("Post created")
    } catch(e) {
        console.log(e)
        res.status(400).json({ msg: "Error" })
    }

}
module.exports.createPost = createPost;

