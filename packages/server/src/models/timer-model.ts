import mongoose from "mongoose";
import { Schema } from "mongoose";

const timerSchema = new Schema(
  {
    totalTime: {
      type: Number,
      required: [true, "Total time is required"],
    },
  },
  {
    timestamps: true,
  },
);

const Timer = mongoose.model("timer", timerSchema);

export { Timer };
