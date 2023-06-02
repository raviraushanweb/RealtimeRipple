import express, { Router, Request, Response, NextFunction } from "express";
import { converterController } from "../controllers/";

const converterRoutes = express.Router()

converterRoutes.post("/convert/:filename", converterController.convertVideo)

export default converterRoutes