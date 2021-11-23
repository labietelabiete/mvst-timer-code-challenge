import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import rateLimit from "express-rate-limit";

import { timerRouter } from "./routes/timer-routes";

export const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(
  rateLimit({
    windowMs: 24 * 60 * 60 * 1000, // 1 day
    max: 100,
    message: "Reached 100 queries, limits for application to MVST.",
  }),
);

app.use("/", timerRouter);
