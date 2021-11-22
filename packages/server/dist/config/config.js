"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { MONGO_DB_URL, PORT } = process.env;
// console.log(MONGO_DB_URL);
const CONFIG = {
    app: {
        port: PORT || 4000,
    },
    db: {
        url: MONGO_DB_URL || "",
    },
};
exports.config = CONFIG;
//# sourceMappingURL=config.js.map