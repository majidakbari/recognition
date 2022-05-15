import {RequestHandler} from "express";
import getSessionCombinedDetailsService from "../../services/getSessionCombinedDetailsService";

const getSessionInfoController: RequestHandler = async (req, res) => {
    const sessionId = req.params.sessionId as string;
    return res.send(await getSessionCombinedDetailsService(sessionId));
};

export default getSessionInfoController;