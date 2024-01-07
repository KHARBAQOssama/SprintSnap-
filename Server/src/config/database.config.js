const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
  mongoose.connect(process.env.DATABASE_URL, {});

  const db = mongoose.connection;

  db.on("error", (err) => {
    console.error("MongoDB connection error:", err);
  });
  db.once('open',()=>{
    console.log("db connected");
  })

};