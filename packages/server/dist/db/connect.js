"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../config/config");
function connect() {
    return mongoose_1.default.connect(config_1.config.db.url, { useNewUrlParser: true });
}
exports.connect = connect;
//# sourceMappingURL=connect.js.map