const express = require("express");
const http = require("http");
const app = express();
const cookieParser = require("cookie-parser");
const routes = require("./src/routes");
const cors = require("cors");
const path = require("path");
const fs = require("fs");

require("dotenv").config();
require("./src/config/database.config")();

app.use(cookieParser());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: false }));

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(
  "/files",
  express.static(path.join(__dirname, "public"))
);

const socketIo = require("socket.io");
const { handleSocketConnection } = require("./src/config/socketHandler");
const { initializeSocket } = require("./src/config/socket.config");

const server = http.createServer(app);
const io = initializeSocket(server);
app.set("socketIo", io);
// const io = socketIo(server, {
//   cors: {
//     origin: "http://localhost:5173",
//   },
// });
app.get("/api/download/:filename", (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, "public", "uploads", filename);
  
  if (fs.existsSync(filePath)) {
    try {
      console.log(filename, filePath);
      res.setHeader("Content-disposition", "attachment; filename=" + filename);
      res.setHeader("Content-type", "application/octet-stream");

      const fileStream = fs.createReadStream(filePath);
      console.log(fileStream);
      fileStream.pipe(res);
    } catch (error) {
      console.log(error);
    }
  } else {
    res.status(404).send("File not found");
  }
});

// const userSocketMap = new Map();

// io.on("connection", (socket) => {

//   socket.on("authenticate", (userId) => {
//     userSocketMap.set(userId, socket.id);
//   });

//   socket.on("disconnect", () => {
//     console.log("Client disconnected: " + socket.id);

//     userSocketMap.forEach((value, key) => {
//       if (value === socket.id) {
//         userSocketMap.delete(key);
//       }
//     });
//   });
// });
io.on("connection", handleSocketConnection);

app.set("socketio", io);

app.use("/api", routes);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`running on ${PORT}`);
});
