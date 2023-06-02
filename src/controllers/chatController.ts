import WebSocket, { Server as WebSocketServer } from "ws";

let wss: WebSocketServer;

const chatController = {
	initialiseChatServer(server: any) {
		wss = new WebSocketServer({ server });

		wss.on("connection", (ws: WebSocket) => {
			ws.on("message", (message: string) => {
				console.log("Received: ", message.toString());
				ws.send(`Hello, you sent -> ${message}`);
			});

			ws.send("Hi there, I am a WebSocket server");
		});

		console.log("WebSocket chat server started!");
	},
};


export default chatController;