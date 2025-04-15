import express from "express";
import transformDataRouter from "./api/transformData.controller";

const app = express();

app.use("/api", transformDataRouter);

export default app;
