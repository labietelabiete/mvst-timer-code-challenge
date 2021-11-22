"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const timerSchema = new mongoose_2.Schema({
    totalTime: {
        type: Number,
        required: [true, "Total time is required"],
    },
}, {
    timestamps: true,
});
const Timer = mongoose_1.default.model("timer", timerSchema);
exports.Timer = Timer;
//# sourceMappingURL=timer-model.js.map