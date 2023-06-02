import { APP_NAME, APP_PORT } from './config';
import express, { Express, Request, Response } from "express";
import http from 'http';

import uploaderRoutes from "./routes/uploader";
import converterRoutes from "./routes/converter";
import streamRoutes from "./routes/stream";
import { chatController } from './controllers';

const app: Express = express();


app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploader", uploaderRoutes);
app.use("/converter", converterRoutes);
app.use("/streamer", streamRoutes);

const server = http.createServer(app);
chatController.initialiseChatServer(server);

server.listen(APP_PORT, () => {
  console.log(`Server is running in http://localhost:${APP_PORT}`)
});
