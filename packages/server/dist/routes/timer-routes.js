"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const timer_controller_1 = require("../controllers/timer-controller");
const Router = require("express").Router;
const timerRouter = Router();
timerRouter.get("/", timer_controller_1.timerController.get);
timerRouter.patch("/", timer_controller_1.timerController.update);
//# sourceMappingURL=timer-routes.js.map