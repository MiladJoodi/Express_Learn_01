const express = require("express");
const app = express();

const mongoose = require("mongoose")


app.get("/", (req, res)=>{
    res.status(200).json({msg: "blog server main page"});
});