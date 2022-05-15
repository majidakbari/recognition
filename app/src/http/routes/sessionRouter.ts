import {Router} from "express";
import MethodNotAllowedError from "../../errors/clinetErrors/methodNotAllowedError";
import getSessionInfoController from "../controllers/getSessionInfoController";

const router = Router();

router.route('/session/:sessionId').get(getSessionInfoController)
    .all(() => {
        throw new MethodNotAllowedError()
    });

export default router;