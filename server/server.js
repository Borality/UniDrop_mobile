// const express = require("express");
// const path = require("path");

// const app = express();
// const server = require("http").createServer(app); //creates server on PC

// const io = require("socket.io")(server);

// app.use(express.static(path.join(__dirname + "/public")));

// io.on("connection", function (socket) {
// 	socket.on("sender-join", function (data) {
// 		socket.join(data.uid);
// 	});
// 	socket.on("receiver-join", function (data) {
// 		socket.join(data.uid);
// 		socket.in(data.sender_uid).emit("init", data.uid);
// 	});
// 	socket.on("file-meta", function (data) {
// 		socket.in(data.uid).emit("fs-meta", data.metadata);
// 	});
// 	socket.on("fs-start", function (data) {
// 		socket.in(data.uid).emit("fs-share", {});
// 	});
// 	socket.on("file-raw", function (data) {
// 		socket.in(data.uid).emit("fs-share", data.buffer);
// 	});
// });
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const port = 4000;
const app = express();
const server = createServer(app);

const io = new Server(server, {cors: {
    origin: "http://172.31.146.188/19000",
    methods: ["GET", "POST"],
  },});


io.on('connection', (socket) => {
	console.log(`User connected: ${socket.id}`);
	socket.on('create-room', (user) => {
		socket.join(user.roomId);
		console.log(`User with ID: ${socket.id} joined room: ${user.roomId}`)
	});
	socket.on('join-room', (user) => {
		socket.join(user.roomId);
		console.log(`User with ID: ${socket.id} joined room: ${user.roomId}`)
		// To the room that only has the socket that created room emit user-connected 
		socket.to(user.roomId).emit('user-connected');
		socket.emit('in-room');
		io.emit('both-in-room');
	});
	socket.on('file-ready', (data, metaData) => {
		socket.to(metaData.roomId).emit('file-received', data, metaData)
	})
	socket.on('disconnect', () => {
		console.log(`User Disconnected: ${socket.id}`)
	});
})


server.listen(process.env.PORT || port, () => {
	console.log(`Listening on port: ${port}`)
});

