const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    title: {
        type: String
    }
})