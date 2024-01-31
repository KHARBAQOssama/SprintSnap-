const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
const routes = require('./src/routes')
require("dotenv").config();
require("./src/config/database.config")();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api", routes);

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=>{
    console.log(`running on ${PORT}`);
})
