import { timerController } from "../controllers/timer-controller";

const Router = require("express").Router;

const timerRouter = Router();

timerRouter.get("/", timerController.get);
timerRouter.patch("/", timerController.update);

export { timerRouter };
