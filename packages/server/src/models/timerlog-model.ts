import mongoose from "mongoose";
import { Schema } from "mongoose";

const timerLogSchema = new Schema(
  {
    timerLog: {
      type: Number,
      required: [true, "Log time is required"],
    },
  },
  {
    timestamps: true,
  },
);

const TimerLog = mongoose.model("log", timerLogSchema);

export { TimerLog };
