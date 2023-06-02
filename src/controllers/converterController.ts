import ffmpeg from 'fluent-ffmpeg';
import { Request, Response, NextFunction } from 'express';

const converterController = {
  async convertVideo(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const videoPath = 'public/videos/' + req.params.filename;
      const outputVideoPath = 'public/videos/converted-' + req.params.filename;

      ffmpeg(videoPath)
        .outputOptions('-preset ultrafast')
        .output(outputVideoPath)
        .on('end', function() {
          console.log('Video conversion finished');
        })
        .on('error', function(err) {
          console.log('An error occurred during video conversion: ' + err.message);
        })
        .run();

      res.status(200).json({ message: 'Video conversion started' });
    } catch (err) {
      return next(err);
    }
  }
};

export default converterController;
