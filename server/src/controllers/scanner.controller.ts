import { Request, Response } from "express";
import { getFoodRecalls } from "../services/foodRecallService";

export async function getRecalls(req: Request, res: Response): Promise<void> {
  try {
    const limit = parseInt(req.query.limit as string) || 10;
    const recalls = await getFoodRecalls(limit);

    if (!recalls) {
      res.status(500).json({ error: "Failed to fetch recalls" });
      return; // exit the function, no value returned
    }
    res.json(recalls);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
}
