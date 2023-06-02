import { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";

const streamController = {
	streamVideo(req: Request, res: Response, next: NextFunction): void {
		const videoPath = path.resolve("public/converted", req.params.filename);
		const stat = fs.statSync(videoPath);
		const fileSize = stat.size;
		const range = req.headers.range;

		if (range) {
			const parts = range.replace(/bytes=/, "").split("-"); // bytes=0-499
			const start = parseInt(parts[0], 10);
			const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
			const chunksize = end - start + 1;
			const file = fs.createReadStream(videoPath, { start, end });
			const head = {
				"Content-Range": `bytes ${start}-${end}/${fileSize}`,
				"Accept-Ranges": "bytes",
				"Content-Length": chunksize,
				"Content-Type": "video/mp4",
			};

			res.writeHead(206, head);
			file.pipe(res);
		} else {
			const head = {
				"Content-Length": fileSize,
				"Content-Type": "video/mp4",
			};

			res.writeHead(200, head);
			fs.createReadStream(videoPath).pipe(res);
		}
	},
};

export default streamController;
