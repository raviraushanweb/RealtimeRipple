import { Request, Response, NextFunction } from "express";
import CustomErrorHandler from "../utils/CustomErrorHandler";

const errorHandler = (
	err: CustomErrorHandler | Error,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	let statusCode = 500;
	let data = {
		message: "Internal server error",
	};

	if (err instanceof CustomErrorHandler) {
		statusCode = err.status;
		data = {
			message: err.message,
		};
	}

	return res.status(statusCode).json(data);
};

export default errorHandler;
