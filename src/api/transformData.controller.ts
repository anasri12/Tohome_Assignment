import { Router } from "express";
import { transformData } from "../services/transformData.service";

const router = Router();

router.get("/transformData", async (req, res) => {
  try {
    const result = await transformData();
    res.json(result);
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

export default router;
