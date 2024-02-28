import express, { Router } from "express";
import { getAllImages, getSingleImage } from "../controllers/imagesController";

const router: Router = express.Router();

router.route("/").get(getAllImages);
router.route("/:imageId").get(getSingleImage);

export default router;
