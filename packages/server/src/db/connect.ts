import mongoose from "mongoose";
import { config } from "../config/config";

export function connect() {
  return mongoose.connect(config.db.url, { useNewUrlParser: true });
}
