import {RequestHandler} from "express";
import getSessionCombinedDetailsAction from "../../services/getSessionCombinedDetailsAction";

const getSessionInfoController: RequestHandler = (req, res) => {
    const sessionId = req.params.sessionId as string;
    return res.send(getSessionCombinedDetailsAction(sessionId));
};

export default getSessionInfoController;