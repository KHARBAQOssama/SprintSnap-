const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
const routes = require('./src/routes')
require("dotenv").config();
require("./src/config/database.config")();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/',(req,res)=>{
    return res.status(400).json('hello world');
})
app.use("/api", routes);

app.listen(3000, ()=>{
    console.log("running");
})
