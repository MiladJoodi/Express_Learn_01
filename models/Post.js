const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String
    },
    viewNum: {
        type: Number,
        required: true,
        default: 0
    },
    date: {
        type: String,
        default: new Date()
    }
});

module.exports = mongoose.model("Post", PostSchema);