import { Router } from "express";

const router = Router();

router.get("/transformData", async (req, res) => {
  try {
    res.json({ test: "EiEi" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
});

export default router;
