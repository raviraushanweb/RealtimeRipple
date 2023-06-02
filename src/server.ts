import { APP_NAME, APP_PORT } from './config';
import express, { Express, Request, Response } from "express";

import uploaderRoutes from "./routes/uploader";
import converterRoutes from "./routes/converter";

const app: Express = express();


app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/uploader", uploaderRoutes);
app.use("/converter", converterRoutes);

app.listen(APP_PORT, () => {
  console.log(`Server is running in http://localhost:${APP_PORT}`)
});
