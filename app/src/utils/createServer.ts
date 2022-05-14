import helmet from "helmet";
import express from "express";
// import appRouter from "../routes/index";
import corsHandler from "../middlewares/corsHandler";
import errorHandler from "../middlewares/errorHandler";
import routeHandler from "../middlewares/routeHandler";

const createServer = () => {
    const app = express();
    app.use(helmet());
    app.use(corsHandler);
    // app.use(appRouter);
    app.use(routeHandler);
    app.use(errorHandler);
    return app;
}

export default createServer;