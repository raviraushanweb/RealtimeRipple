import express, { Router, Request, Response, NextFunction } from "express";
import { uploaderController } from "../controllers/";

const uploaderRoutes: Router = express.Router();

uploaderRoutes.post("/upload", uploaderController.upload);

export default uploaderRoutes;