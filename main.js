import Koa from "koa";
import logger from "koa-logger";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";

import config from "./config/app"; // Environment config
import router from "./routes/index";
import db from "./models/index";
import errorMiddleware from "./errors/middleware";

const app = new Koa();
app.db = db;

app.use(errorMiddleware);
app.use(logger());
app.use(cors());
app.use(bodyParser());

app.use(router.allowedMethods());
app.use(router.routes()); // routes enableds

app.listen(config.port, () => {
    console.log(`Started Server on Port ${config.port}`);
});
