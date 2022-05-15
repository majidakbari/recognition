import {Router} from "express";
import MethodNotAllowedError from "../../errors/clinetErrors/methodNotAllowedError";
import getSessionInfoController from "../controllers/getSessionInfoController";
import asyncHandler from "../../utils/asyncHandler";

const router = Router();

router.route('/session/:sessionId').get(asyncHandler(getSessionInfoController))
    .all(() => {
        throw new MethodNotAllowedError()
    });

export default router;