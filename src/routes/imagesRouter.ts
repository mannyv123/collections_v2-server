import express, { Router } from "express";
import {
   getAllImages,
   getComments,
   getLikes,
   getSingleImage,
} from "../controllers/imagesController";

const router: Router = express.Router();

router.route("/").get(getAllImages);
router.route("/:imageId").get(getSingleImage);
router.route("/:imageId/likes").get(getLikes);
router.route("/:imageId/comments").get(getComments);

export default router;
