import db from "../models";
import { Request, Response, NextFunction } from "express";

async function get(req: Request, res: Response, next: NextFunction) {
  try {
    const totalTime = await db.Timer.find({}, { totalTime: 1, _id: 0 });

    res.status(200).send({
      data: totalTime,
    });
  } catch (error: any) {
    res.status(500).send({
      message: "Error getting total time.",
      error: error.message,
    });
    next(error);
  }
}

async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const { localTime } = req.body;
    // Updating the global value of the Timer
    await db.Timer.updateMany({}, { $inc: { totalTime: localTime } });

    // Creating the log from the local time
    await db.TimerLog.create({ logTime: localTime });

    // Send response
    res.status(200).send({ message: "Timer updated succesfully!" });
  } catch (error: any) {
    res.status(500).send({
      message: "Error updating the Timer",
      error: error.message,
    });
    next(error);
  }
}

export const timerController = { get, update };
