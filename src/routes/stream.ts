import express from 'express'
import { streamController } from '../controllers'

const streamRoutes = express.Router()

streamRoutes.get("/stream/:filename", streamController.streamVideo);

export default streamRoutes