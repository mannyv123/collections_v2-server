import express, { Router } from "express";
import collectionsRouter from "./collectionsRouter";

const router: Router = express.Router();

router.use("/collections", collectionsRouter);

export default router;
