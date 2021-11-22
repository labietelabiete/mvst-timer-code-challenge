"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetTimer = void 0;
const timer_model_1 = require("../models/timer-model");
function resetTimer() {
    return __awaiter(this, void 0, void 0, function* () {
        const time = { totalTime: 0 };
        yield timer_model_1.Timer.deleteMany({});
        // Reseting Timer value
        yield timer_model_1.Timer.create(time);
        console.log("Timer reset!");
    });
}
exports.resetTimer = resetTimer;
//# sourceMappingURL=seed.js.map