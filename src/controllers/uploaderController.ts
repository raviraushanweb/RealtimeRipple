import { Request, Response, NextFunction } from 'express';
import multer, { diskStorage, StorageEngine } from "multer";
import path from "path";

const uploaderController = {
  async upload(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const storage: StorageEngine = diskStorage({
        destination: function(req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) {
          cb(null, 'public/videos/');
        },
        filename: function(req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) {
          cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        }
      });

      const uploadHandle = multer({ storage: storage }).single('video');
      uploadHandle(req, res, function(err: any) {
        if (err) {
          return next(err);
        }
        res.status(200).json({ file: req.file });
      });
    } catch (err) {
      return next(err);
    }
  }
}

export default uploaderController;
