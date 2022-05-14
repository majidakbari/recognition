import {RequestHandler} from "express";
import RequestNotAcceptedError from "../errors/clinetErrors/requestNotAcceptedError";

const acceptableHandler: RequestHandler = (req, res, next) => {
    const acceptHeader = req.header("accept");
    if (acceptHeader != undefined) {
        if (["*/*", "application/json"].indexOf(acceptHeader.toString()) < 0) {
            throw new RequestNotAcceptedError();
        }
    }
    next();
};

export default acceptableHandler;