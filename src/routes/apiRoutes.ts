import express, { Router } from "express";
import collectionsRouter from "./collectionsRouter";
import imagesRouter from "./imagesRouter";

const router: Router = express.Router();

router.use("/collections", collectionsRouter);
router.use("/images", imagesRouter);

export default router;
