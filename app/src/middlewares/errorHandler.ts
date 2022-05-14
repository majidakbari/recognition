import AbstractClientError from "../errors/clinetErrors/abstractClientError";
import ErrorInterface from "../interfaces/error";
import {Request, Response, NextFunction, ErrorRequestHandler} from "express";
import AbstractError from "../errors/abstractError";

const errorHandler: ErrorRequestHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
    let error: ErrorInterface;
    let statusCode: number;

    if (err instanceof AbstractError) {
        statusCode = err.getStatusCode();
        error = {
            error: err instanceof AbstractClientError ? "Client Error" : "Server Error",
            message: err.getMessage()
        };
    } else {
        statusCode = 500;
        error = {
            error: "Server Error",
            message: "Something went wrong."
        };
    }
    res.status(statusCode).json(error);
    next();
};

export default errorHandler;