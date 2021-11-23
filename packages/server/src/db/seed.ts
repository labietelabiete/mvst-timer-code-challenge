import { Timer } from "../models/timer-model";
import { TimerLog } from "../models/timerlog-model";

export async function resetTimer() {
  const time = { totalTime: 0 };
  await Timer.deleteMany({});
  await TimerLog.deleteMany({});
  // Reseting Timer value
  await Timer.create(time);
  console.log("Timer reset!");
}
