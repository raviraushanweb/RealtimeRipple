import express, { Router, Request, Response, NextFunction } from "express";
import { uploaderController } from "../controllers/";

const uploaderRoutes: Router = express.Router();

// uploaderRoutes.post("/upload", upload.single("video"), (req: Request, res: Response, next: NextFunction) => {
//   res.json({ file: req.file });
// });

uploaderRoutes.post("/upload", uploaderController.upload);

export default uploaderRoutes;

