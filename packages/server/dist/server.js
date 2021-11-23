"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const timer_routes_1 = require("./routes/timer-routes");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use((0, morgan_1.default)("dev"));
exports.app.use((0, helmet_1.default)());
exports.app.use((0, cors_1.default)());
exports.app.use((0, express_rate_limit_1.default)({
    windowMs: 24 * 60 * 60 * 1000,
    max: 1000000,
    message: "Reached 100 queries, limits for application to MVST.",
}));
exports.app.use("/", timer_routes_1.timerRouter);
//# sourceMappingURL=server.js.map