import { Router, Request, Response } from "express";
import { transformData } from "../services/transformData.service";

const router = Router();

router.get("/transformData", async (req: Request, res: Response) => {
  try {
    const { department } = req.query;

    const result = await transformData(
      typeof department === "string" ? department : undefined
    );

    if (department && !result[department as string]) {
      res
        .status(404)
        .json({ message: `Department '${department}' not found.` });
    }

    res.json(department ? result[department as string] : result);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

export default router;
