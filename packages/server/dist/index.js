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
const server_1 = require("./server");
const config_1 = require("./config/config");
const connect_1 = require("./db/connect");
// import { resetTimer } from "./db/seed";
console.log(config_1.config.db.url);
(0, connect_1.connect)()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    // await resetTimer();
    server_1.app.listen(config_1.config.app.port, () => {
        console.log(`Server is now running at port ${config_1.config.app.port}!`);
    });
}))
    .catch((error) => {
    console.log(`Error connecting the server: ${error}`);
});
//# sourceMappingURL=index.js.map