import {RequestHandler} from "express";
import getSessionCombinedDetailsAction from "../../services/getSessionCombinedDetailsAction";

const getSessionInfoController: RequestHandler = async (req, res) => {
    const sessionId = req.params.sessionId as string;
    return res.send(await getSessionCombinedDetailsAction(sessionId));
};

export default getSessionInfoController;