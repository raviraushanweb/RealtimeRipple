import ffmpeg from "fluent-ffmpeg";
import { Request, Response, NextFunction } from "express";
import path from "path";

const converterController = {
  async convertVideo(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> {
    try {
      const videoPath = "public/videos/" + req.params.filename;
      const outputFilename =
			"converted-" + path.parse(req.params.filename).name + ".mp4";
      const outputVideoPath =
        "public/converted/converted-" +
        path.parse(req.params.filename).name +
        ".mp4";
      // ffmpeg.setFfmpegPath(path.join(__dirname, 'path/to/your/ffmpeg'));

      ffmpeg(videoPath)
			.format("mp4")
			.outputOptions("-preset ultrafast")
			.output(outputVideoPath)
			.on("end", function () {
				// Console.log("Video conversion finished");
				// Send response when conversion finishes
				res.status(200).json({
					message: "Video conversion finished",
					filename: outputFilename,
				});
			})
			.on("error", function (err: Error) {
				// Console.log("An error occurred during video conversion: " + err.message);
				// Send error response
				res.status(500).json({
					message:
						"An error occurred during video conversion: " +
						err.message,
				});
			})
			.run();
    } catch (err: any) {
      return next(err);
    }
  },
};

export default converterController;
