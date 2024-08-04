const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

app.use(cors());
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({
    limit: "50mb",
    extended:true,
    parameterLimit: 50000
}))


app.get("/", (req, res)=>{
    res.status(200).json({msg: "blog server main page"});
});

const dbUrl = process.env.MONGO_URL;
const port = process.env.PORT;

mongoose.connect(dbUrl)
.then(data => app.listen(port))
.catch(err=> console.log("No"))