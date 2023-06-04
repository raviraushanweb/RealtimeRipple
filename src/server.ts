import { APP_NAME, APP_PORT } from './config';
import express, { Express, Request, Response } from "express";
import http from 'http';
import cors from "cors";
import {setupVideoCleanup} from './utils/videoCleanup';

import uploaderRoutes from "./routes/uploader";
import converterRoutes from "./routes/converter";
import streamRoutes from "./routes/stream";
import { chatController } from './controllers';
import errorHandler from './middlewares/errorHandler';

const app: Express = express();
app.use(cors());


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

app.use(errorHandler)

server.listen(APP_PORT, () => {
  console.log(`Server is running in http://localhost:${APP_PORT}`);
  setupVideoCleanup();
});
