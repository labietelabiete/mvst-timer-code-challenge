"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.timerRouter = void 0;
const timer_controller_1 = require("../controllers/timer-controller");
const Router = require("express").Router;
const timerRouter = Router();
exports.timerRouter = timerRouter;
timerRouter.get("/", timer_controller_1.timerController.get);
timerRouter.patch("/", timer_controller_1.timerController.update);
//# sourceMappingURL=timer-routes.js.map