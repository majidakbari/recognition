import { Router } from "express";
import sessionRouter from "./sessionRouter";

const router = Router();

router.use("/api", sessionRouter);

export default router;