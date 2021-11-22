import { Timer } from "../models/timer-model";

export async function resetTimer() {
  const time = 0;
  await Timer.deleteMany({});
  // Reseting Timer value
  await Timer.create([time]);
  console.log("Timer reset!")
}
