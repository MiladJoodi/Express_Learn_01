const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String
    },
    viewNum: {
        type: Number,
        required: true
    },
})