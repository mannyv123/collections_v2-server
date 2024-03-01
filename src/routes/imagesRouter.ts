import express, { Router } from "express";
import { getAllImages, getLikes, getSingleImage } from "../controllers/imagesController";

const router: Router = express.Router();

router.route("/").get(getAllImages);
router.route("/:imageId").get(getSingleImage);
router.route("/:imageId/likes").get(getLikes);

export default router;
