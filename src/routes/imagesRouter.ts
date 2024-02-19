import express, { Router } from "express";
import { getAllImages } from "../controllers/imagesController";

const router: Router = express.Router();

router.route("/").get(getAllImages);

export default router;
