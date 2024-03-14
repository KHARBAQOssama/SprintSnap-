const socketIo = require("socket.io");
const userSocketMap = new Map();
const initializeSocket = (server) => {
  const io = socketIo(server, {
    cors: {
      origin: "http://localhost:5173",
    },
  });

  io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("authenticate", (userId) => {
      userSocketMap.set(userId, socket.id);
    });

    socket.on("disconnect", () => {
      console.log("A user disconnected");
    });
  });

  return io;
};

module.exports = { initializeSocket,userSocketMap };
