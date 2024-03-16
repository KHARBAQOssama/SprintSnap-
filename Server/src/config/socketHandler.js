const userSocketsMap = new Map();
const handleSocketConnection = (socket) => {
  const userId = socket.handshake.query.userId;
  if (userId) {
    console.log("connected", userId);
    userSocketsMap.set(userId, socket.id);

    socket.on("disconnect", () => {
      userSocketsMap.delete(userId);
    });
  }
};
const anotherExample = (userId, message, io) => {
  const socketId = userSocketsMap.get(userId);
  if (socketId) {
    io.to(socketId).emit("", message);
  }
};
const example = (req, res) => {
  //   const message = "New !";
  //   const userIdsToNotify = getUserIdsToNotify(); // Simulated user IDs to notify
  //   userIdsToNotify.forEach((userId) => {
  //     socketHandler.sendToUser(
  //       userId,
  //       message,
  //       req.app.get("socketio")
  //     );
  //   });
  //   res.send("s sent successfully!");
};
module.exports = { handleSocketConnection };
