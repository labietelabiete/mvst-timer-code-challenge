"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimerLog = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const timerLogSchema = new mongoose_2.Schema({
    timerLog: {
        type: Number,
        required: [true, "Log time is required"],
    },
}, {
    timestamps: true,
});
const TimerLog = mongoose_1.default.model("log", timerLogSchema);
exports.TimerLog = TimerLog;
//# sourceMappingURL=timerlog-model.js.map