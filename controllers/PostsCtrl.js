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
    } catch (e) {
        console.log(e)
        res.status(400).json({ msg: "Error" })
    }

}
module.exports.createPost = createPost;

// ONE POST
const getOnePost = async (req, res) => {

    try {
        const thePost = await Post.findById(req.params.id);
        res.status(200).json(thePost)
    } catch {
        res.status(400).json({ msg: "Error" })
    }

}
module.exports.getOnePost = getOnePost;

// UPDATE
const updatePost = async (req, res) => {

    try {
        const newData = req.body;
        await Post.findByIdAndUpdate(req.params.id, newData, { new: true });
        res.status(200).json({ msg: "post updated" })
    } catch {
        res.status(400).json({ msg: "Error" })
    }

}
module.exports.updatePost = updatePost;

// DELETE
const removePost = async (req, res) => {

    try {
        await Post.deleteOne({_id: req.params.id});
        res.status(200).json({ msg: "post Removed" })
    } catch {
        res.status(400).json({ msg: "Error" })
    }

}
module.exports.removePost = removePost;