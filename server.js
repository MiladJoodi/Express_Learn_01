const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

app.use(cors());
app.use(bodyParser.json({limit}))


app.get("/", (req, res)=>{
    res.status(200).json({msg: "blog server main page"});
});